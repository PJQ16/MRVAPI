//สร้างcontroller  export ส่งออก . ชื่อตัวแปล
const {
  sequelize,
  Co_benefitModel,
  Co_benefit_parameterModel,
  EntriesModel,
  MetricModel, 
  MrvModel,
  Multi_factorModel,
  PlanModel,
  OrganizationModel,
  UserModel,
  VerificationModel,
  RoleModel
  } = require('../../models/associate')
exports.read = async(req,res)=>{
    try{
        const { id } = req.params; // ถ้าใช้ URL params เช่น /api/resource/:id
        if (!id) {
          return res.status(400).json('Primary key (id) is required');
        }
        const ShowData = await Co_benefit_Lole_inputModel.findByPk(id);
        res.status(200).json(ShowData);
     }catch(e){
         res.status(500).json('Server Error' + e.message);
     }
}

exports.list = async (req, res) => {
  try {
    // ดึงข้อมูลปี 'year_mrv' จากตาราง MrvModel
    const mrvmodels = await MrvModel.findAll({
      attributes: ['year_mrv'] // กำหนดเฉพาะคอลัมน์ที่ต้องการ
    });

    // ดึงข้อมูลชื่อองค์กรจากตาราง OrganizationModel
    const organizemoels = await OrganizationModel.findAll({
      attributes: ['organization_name']
    });

    const planmodels = await PlanModel.findAll({
      attributes:['plan_name']
    })

    // สร้าง array สำหรับเก็บข้อมูล
    const mrv = [];

    // เพิ่มข้อมูลปีและองค์กรลงใน array
    mrvmodels.forEach(item => {
      const year = item.year_mrv;
      
      // สร้าง entry สำหรับปีนั้นๆ และเพิ่มข้อมูลองค์กร
      mrv.push({
        years: year,
        organization: organizemoels.map(org => ({
          organization_name: org.organization_name,
          plan:planmodels.map(plan =>({
              plan_name:plan.plan_name
          }))
        }))
      });
    });

    // ส่งข้อมูล JSON ไปยัง client
    res.status(200).json({ mrv });
  } catch (e) {
    // ส่งข้อความแสดงข้อผิดพลาดในกรณีที่เกิดข้อผิดพลาด
    res.status(500).json({ message: 'Server Error', error: e.message });
  }
};



exports.create = async(req,res)=>{
    try{
       const addData = await Co_benefit_Lole_inputModel.create(req.body);
       res.status(200).json(addData);
    }catch(e){
        res.status(500).json('Server Error' + e.message);
    }
}

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
      const [affectedRows] = await Co_benefit_Lole_inputModel.update(updateData, {
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
      const affectedRows = await Co_benefit_Lole_inputModel.destroy({
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
  