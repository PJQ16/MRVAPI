//สร้างcontroller  export ส่งออก . ชื่อตัวแปล
const {Co_benefitModel} = require('../../models/associate')
exports.read = async(req,res)=>{
    try{
        const { id } = req.params; // ถ้าใช้ URL params เช่น /api/resource/:id
        if (!id) {
          return res.status(400).json('Primary key (id) is required');
        }
        const ShowData = await Co_benefitModel.findByPk(id);
        res.status(200).json(ShowData);
     }catch(e){
         res.status(500).json('Server Error' + e.message);
     }
}

exports.list = async(req,res)=>{
    try{
       const ShowDataList = await Co_benefitModel.findAll();
       res.status(200).json(ShowDataList);
    }catch(e){
        res.status(500).json('Server Error' + e.message);
    }
}

exports.create = async(req,res)=>{
    try{
       const addData = await Co_benefitModel.create(req.body);
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
      const [affectedRows] = await Co_benefitModel.update(updateData, {
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
      const affectedRows = await Co_benefitModel.destroy({
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
  