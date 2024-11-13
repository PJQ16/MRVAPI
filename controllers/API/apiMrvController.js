//สร้างcontroller  export ส่งออก . ชื่อตัวแปล
const {
  sequelize,
  Co_benefitModel,
  Multi_factorModel,
  PlanModel,
  OrganizationModel,
  UserModel,
  VerificationModel,
  RoleModel
  } = require('../../models/associate')
  
//API ส่งให้ทาง CAMPT
//target
/*  exports.target = async (req, res) => {
  try {
    // สร้าง raw query ด้วย Sequelize
    const query = `
  SELECT
  ms.actual_year as years,
  stg.id as sub_target_id,
  tg.target_cores,
  tg.description as target_description,
  stg.sub_target_name,
  stg.description as sub_target_desciption,
  p.id as plan_id,
  p.name as plan_name,
  sc.id as sub_category_id,
  sc.category,
  d.desciption,
  d.unit,
  plan_value,
  (ts.jan_val + ts.feb_val + ts.mar_val + ts.apr_val + ts.may_val + ts.jun_val + ts.jul_val + 
   ts.aug_val + ts.sep_val + ts.oct_val + ts.nov_val + ts.dec_val + ts.actual_value) as actual_value,
  ts.verify_status
  FROM details as d 
  INNER JOIN plans as p ON d.plan_id = p.id
  INNER JOIN subCategories as sc ON d.categories_id = sc.id
  INNER JOIN periods as pr ON d.periods_id = pr.id
  INNER JOIN subTargets as stg ON d.sub_target_id = stg.id
  INNER JOIN transections as ts ON d.id = ts.detail_id
  INNER JOIN milestones as ms ON ts.milestone_id = ms.id
  INNER JOIN targets as tg ON stg.target_id = tg.id
  WHERE sub_target_name != "ไม่มี" 
  AND stg.description != "ไม่มี"
  ORDER BY tg.target_cores, p.id, stg.id, sc.id ASC
`;


    // ใช้ Sequelize เรียกใช้ raw query
    const data = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT
    });

    // จัดโครงสร้างข้อมูลตามที่ต้องการ
    const result = data.reduce((acc, row) => {
      // หา years ที่มีอยู่แล้วใน acc หรือสร้างใหม่ถ้าไม่มี
      let yearEntry = acc.find(entry => entry.years === row.years);
      if (!yearEntry) {
        yearEntry = {
          years: row.years,
          target: []
        };
        acc.push(yearEntry);
      }

      // หา target_cores ที่มีอยู่แล้วในปีนี้ หรือสร้างใหม่ถ้าไม่มี
      let targetEntry = yearEntry.target.find(target => target.target_cores === row.target_cores);
      if (!targetEntry) {
        targetEntry = {
          target_cores: row.target_cores,
          target_description: row.target_description,
          subTarget: []
        };
        yearEntry.target.push(targetEntry);
      }

      // หา subTarget ที่มีอยู่แล้วใน target_cores หรือสร้างใหม่ถ้าไม่มี
      let subTargetEntry = targetEntry.subTarget.find(sub => sub.sub_target_name === row.sub_target_name);
      if (!subTargetEntry) {
        subTargetEntry = {
          sub_target_name: row.sub_target_name,
          sub_target_desciption: row.sub_target_desciption,
          plan: []
        };
        targetEntry.subTarget.push(subTargetEntry);
      }

      // หา plan ที่มีอยู่แล้วใน subTarget หรือสร้างใหม่ถ้าไม่มี
      let planEntry = subTargetEntry.plan.find(plan => plan.plan_name === row.plan_name);
      if (!planEntry) {
        planEntry = {
          plan_name: row.plan_name,
          subCategories: []
        };
        subTargetEntry.plan.push(planEntry);
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
        unit: row.unit,
        plan_value: row.plan_value,
        actual_value: row.actual_value,
        verify_status: row.verify_status
      });

      return acc;
    }, []);

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json('Server Error: ' + e.message);
  }
};  */


exports.target = async (req, res) => {
  try {
    // สร้าง raw query ด้วย Sequelize
    const query = `
  SELECT
  ms.actual_year as years,
  stg.id as sub_target_id,
  tg.target_cores,
  tg.description as target_description,
  stg.sub_target_name,
  stg.description as sub_target_desciption,
  p.id as plan_id,
  p.name as plan_name,
  sc.id as sub_category_id,
  sc.category,
  d.desciption,
  d.unit,
  plan_value,
  (ts.jan_val + ts.feb_val + ts.mar_val + ts.apr_val + ts.may_val + ts.jun_val + ts.jul_val + 
   ts.aug_val + ts.sep_val + ts.oct_val + ts.nov_val + ts.dec_val + ts.actual_value) as actual_value,
  ts.verify_status
  FROM details as d 
  INNER JOIN plans as p ON d.plan_id = p.id
  INNER JOIN subCategories as sc ON d.categories_id = sc.id
  INNER JOIN periods as pr ON d.periods_id = pr.id
  INNER JOIN subTargets as stg ON d.sub_target_id = stg.id
  INNER JOIN transections as ts ON d.id = ts.detail_id
  INNER JOIN milestones as ms ON ts.milestone_id = ms.id
  INNER JOIN targets as tg ON stg.target_id = tg.id
  WHERE sub_target_name != "ไม่มี" 
  AND stg.description != "ไม่มี"
  ORDER BY tg.target_cores, p.id, stg.id, sc.id ASC
`;


    // ใช้ Sequelize เรียกใช้ raw query
    const data = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT
    });

    // จัดโครงสร้างข้อมูลตามที่ต้องการ
    const result = data.reduce((acc, row) => {
      // หา years ที่มีอยู่แล้วใน acc หรือสร้างใหม่ถ้าไม่มี
      let yearEntry = acc.find(entry => entry.years === row.years);
      if (!yearEntry) {
        yearEntry = {
          years: row.years,
          target: []
        };
        acc.push(yearEntry);
      }

      // หา target_cores ที่มีอยู่แล้วในปีนี้ หรือสร้างใหม่ถ้าไม่มี
      let targetEntry = yearEntry.target.find(target => target.target_cores === row.target_cores);
      if (!targetEntry) {
        targetEntry = {
          target_cores: row.target_cores,
          target_description: row.target_description,
          subTarget: []
        };
        yearEntry.target.push(targetEntry);
      }

      // หา subTarget ที่มีอยู่แล้วใน target_cores หรือสร้างใหม่ถ้าไม่มี
      let subTargetEntry = targetEntry.subTarget.find(sub => sub.sub_target_name === row.sub_target_name);
      if (!subTargetEntry) {
        subTargetEntry = {
          sub_target_name: row.sub_target_name,
          sub_target_desciption: row.sub_target_desciption,
          plan: []
        };
        targetEntry.subTarget.push(subTargetEntry);
      }

      // หา plan ที่มีอยู่แล้วใน subTarget หรือสร้างใหม่ถ้าไม่มี
      let planEntry = subTargetEntry.plan.find(plan => plan.plan_name === row.plan_name);
      if (!planEntry) {
        planEntry = {
          plan_name: row.plan_name,
          subCategories: []
        };
        subTargetEntry.plan.push(planEntry);
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
        unit: row.unit,
        plan_value: row.plan_value,
        actual_value: row.actual_value,
        verify_status: row.verify_status
      });

      return acc;
    }, []);

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json('Server Error: ' + e.message);
  }
}; 
//plan
exports.plan = async (req, res) => {
  try {
    const query = `
      SELECT
        ms.actual_year as years,
        stg.id as sub_target_id,
        tg.target_cores,
        tg.description as target_description,
        stg.sub_target_name,
        stg.description as sub_target_description,
        p.id as plan_id,
        p.name as plan_name,
        sc.id as sub_category_id,
        sc.category,
        d.desciption,
        d.unit,
        plan_value,
        (ts.jan_val + ts.feb_val + ts.mar_val + ts.apr_val + ts.may_val + ts.jun_val + ts.jul_val + 
         ts.aug_val + ts.sep_val + ts.oct_val + ts.nov_val + ts.dec_val + ts.actual_value) as actual_value,
        ts.verify_status
      FROM details as d 
      INNER JOIN plans as p ON d.plan_id = p.id
      INNER JOIN subCategories as sc ON d.categories_id = sc.id
      INNER JOIN periods as pr ON d.periods_id = pr.id
      INNER JOIN subTargets as stg ON d.sub_target_id = stg.id
      INNER JOIN transections as ts ON d.id = ts.detail_id
      INNER JOIN milestones as ms ON ts.milestone_id = ms.id
      INNER JOIN targets as tg ON stg.target_id = tg.id
      WHERE sub_target_name != "ไม่มี" 
      AND stg.description != "ไม่มี"
      ORDER BY tg.target_cores, p.id, stg.id, sc.id ASC
    `;

    const data = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });

    const result = data.reduce(
      (acc, row) => {
        // หา years ที่มีอยู่แล้วใน acc หรือสร้างใหม่ถ้าไม่มี
        let yearEntry = acc.find(entry => entry.year === row.years);
        if (!yearEntry) {
          yearEntry = {
            year: row.years,
            target: row.plan_value,  // อัพเดตตามข้อมูล
            result: row.actual_value, // อัพเดตตามข้อมูล
            kpis: [],
          };
          acc.push(yearEntry);
        }

        // หา KPI ตามโครงสร้าง schema ที่กำหนด
        yearEntry.kpis.push({
          head: row.target_cores.toString(),
          head_sub: row.sub_target_id.toString(),
          kpi: row.plan_id.toString(),
          status: row.verify_status,
          target: row.plan_value,
          result: row.actual_value,
        });

        return acc;
      },
      []
    );

    // โครงสร้างข้อมูล `kpi` แยกต่างหาก
    const kpiStatus = data.reduce((acc, row) => {
      let kpiEntry = acc.find(entry => entry.k_title === row.sub_target_name);
      if (!kpiEntry) {
        kpiEntry = {
          k_title: row.sub_target_name,
          years: [],
        };
        acc.push(kpiEntry);
      }

      kpiEntry.years.push({
        title: `${row.years}`,
        status: row.verify_status,
        targetDes: row.desciption,
        actionDes: row.verify_status === 0 ? "N/A" : "มีความก้าวหน้าที่ต้องเร่งดำเนินการ และให้ความสำคัญในการขับเคลื่อน",
      });

      return acc;
    }, []);

    res.status(200).json({
      code: 200,
      message: "Success",
      data: {
        years: result,
        kpi: kpiStatus,
      },
    });
  } catch (e) {
    res.status(500).json({ code: 500, message: 'Server Error', details: e.message });
  }
};

