//สร้างcontroller  export ส่งออก . ชื่อตัวแปล
const {TransectionModel, DetailModel,sequelize} = require('../../models/associate');
exports.read = async(req,res)=>{
    try{
        const { id } = req.params; // ถ้าใช้ URL params เช่น /api/resource/:id
        if (!id) {
          return res.status(400).json('Primary key (id) is required');
        }
        const ShowData = await TransectionModel.findByPk(id);
        res.status(200).json(ShowData);
     }catch(e){
         res.status(500).json('Server Error' + e.message);
     }
}

exports.list = async(req,res)=>{
    try{
      const query = `
      SELECT
actual_year,
p.id as plan_id,
p.name as plan_name,
sc.id as sub_category_id,
category,
ts.id as transec_id,
pr.period_type as period_type,
desciption,
unit,
capex,
opex,
opex_ratio,
social_investment,
social_income,
ghg_co2,
plan_value,
jan_val,
feb_val,
mar_val,
apr_val,
may_val,
jun_val,
jul_val,
aug_val,
sep_val,
oct_val,
nov_val,
dec_val,
actual_value,
verify_status
FROM details as d 
INNER JOIN plans as p ON d.plan_id = p.id
INNER JOIN subCategories as sc ON d.categories_id = sc.id
INNER JOIN periods as pr ON d.periods_id = pr.id
INNER JOIN subTargets as stg ON d.sub_target_id = stg.id
INNER JOIN transections as ts ON d.id = ts.detail_id
INNER JOIN milestones as ms ON ts.milestone_id = ms.id
INNER JOIN targets as tg ON stg.target_id = tg.id
ORDER BY 
plan_id,sub_category_id,transec_id ASC;
    `;

    // รัน query โดยใช้ Sequelize
    const data = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT
    });

    // จัดโครงสร้างข้อมูลตามที่ต้องการ
    const result = data.reduce((acc, row) => {
      // หา actual_year ที่มีอยู่แล้วใน acc หรือสร้างใหม่ถ้าไม่มี
      let yearEntry = acc.find(entry => entry.actual_year === row.actual_year);
      if (!yearEntry) {
        yearEntry = {
          actual_year: row.actual_year,
          plan: []
        };
        acc.push(yearEntry);
      }

      // หา plan ที่มีอยู่แล้วใน actual_year นี้ หรือสร้างใหม่ถ้าไม่มี
      let planEntry = yearEntry.plan.find(plan => plan.plan_name === row.plan_name);
      if (!planEntry) {
        planEntry = {
          plan_name: row.plan_name,
          subCategories: []
        };
        yearEntry.plan.push(planEntry);
      }

      // หา subCategory ที่มีอยู่แล้วใน plan หรือสร้างใหม่ถ้าไม่มี
      let subCategoryEntry = planEntry.subCategories.find(subCat => subCat.category === row.category);
      if (!subCategoryEntry) {
        subCategoryEntry = {
          category: row.category,
          detail: []
        };
        planEntry.subCategories.push(subCategoryEntry);
      }

      // เพิ่มรายละเอียดใน detail
      subCategoryEntry.detail.push({
        desciption: row.desciption,
        period_type: row.period_type,
        unit: row.unit,
        capex: row.capex,
        opex: row.opex,
        opex_ratio: row.opex_ratio,
        social_investment: row.social_investment,
        social_income: row.social_income,
        ghg_co2: row.ghg_co2,
        plan_value: row.plan_value,
        jan_val: row.jan_val,
        feb_val: row.feb_val,
        mar_val: row.mar_val,
        apr_val: row.apr_val,
        may_val: row.may_val,
        jun_val: row.jun_val,
        jul_val: row.jul_val,
        aug_val: row.aug_val,
        sep_val: row.sep_val,
        oct_val: row.oct_val,
        nov_val: row.nov_val,
        dec_val: row.dec_val,
        actual_value: row.actual_value,
        verify_status: row.verify_status
      });

      return acc;
    }, []);

    res.status(200).json(result);
    }catch(e){
        res.status(500).json('Server Error' + e.message);
    }
}

exports.create = async (req, res) => {
  const years = 1;  // ค่า milestone_id ที่จะเช็ค
  try {
      // ดึงข้อมูลจากตาราง Detail ทั้งหมด
      const detailData = await DetailModel.findAll({
          attributes: ['id']
      });
      
      // เช็คว่ามีข้อมูลใน Transection ที่ milestone_id เท่ากับค่า years หรือไม่
      const checkTransection = await TransectionModel.findAll({
          attributes: ['id'],
          where: {
              milestone_id: years
          }
      });

      // ถ้ามีข้อมูลอยู่ใน milestone_id แล้ว ให้ return ค่าว่างๆ
      if (checkTransection.length > 0) {
          return res.status(200).json({ message: "Milestone already exists, no data added." });
      }

      // ถ้า milestone_id ไม่มีข้อมูล ให้ทำการ loop ข้อมูล detail แล้วเพิ่มลงใน Transection
      const transactionsToCreate = detailData.map(detail => ({
          milestone_id: years, // ใส่ค่า milestone_id ที่ต้องการ
          detail_id: detail.id, // ใช้ id จากตาราง detail
          plan_value: 0,        // หรือค่าอื่นๆ ตามที่ต้องการ
          jan_val: 0,
          feb_val: 0,
          mar_val: 0,
          apr_val: 0,
          may_val: 0,
          jun_val: 0,
          jul_val: 0,
          aug_val: 0,
          sep_val: 0,
          oct_val: 0,
          nov_val: 0,
          dec_val: 0,
          actual_value: 0,
          verify_status: 0
      }));

      // ใช้ bulkCreate เพื่อเพิ่มข้อมูลลงในฐานข้อมูล
      const createdTransactions = await TransectionModel.bulkCreate(transactionsToCreate);

      res.status(200).json(createdTransactions); // ส่ง response กลับหลังจากเพิ่มข้อมูลเสร็จ
  } catch (e) {
      res.status(500).json('Server Error: ' + e.message);
  }
};


exports.modify = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body; // ข้อมูลใหม่ที่ต้องการปรับปรุง
      
      if (!id) {
        return res.status(400).json('Primary key (id) is required');
      }
      
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json('No data provided to update');
      }
      
      // เรียกใช้ method update() ของ Sequelize
      const [affectedRows] = await TransectionModel.update(updateData, {
        where: {
          id: id
        }
      });
      
      if (affectedRows === 0) {
        return res.status(404).json('Data not found or no changes made');
      }
      
      res.status(200).json({ message: 'Data updated successfully' });
    } catch (e) {
      res.status(500).json('Server Error: ' + e.message);
    }
  };

  
  exports.remove = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json('Primary key (id) is required');
      }
  
      // เรียกใช้ method destroy() ของ Sequelize
      const affectedRows = await TransectionModel.destroy({
        where: {
          id: id
        }
      });
  
      // ตรวจสอบผลลัพธ์
      if (affectedRows === 0) {
        return res.status(404).json('Data not found or already deleted');
      }
  
      // ส่งข้อความว่าลบข้อมูลสำเร็จ
      res.status(200).json('Data deleted successfully');
    } catch (e) {
      res.status(500).json('Server Error: ' + e.message);
    }
  };
  