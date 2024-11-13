const { ProjectModel } = require("../../models/associate");
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

// ฟังก์ชันสำหรับอ่านข้อมูลจากไฟล์ Excel/CSV
const parseExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rawData = xlsx.utils.sheet_to_json(sheet);

  // แมปข้อมูลให้ตรงกับฟิลด์ในฐานข้อมูล
  return rawData.map((item) => ({
    strategy: item["Strategy"], // แก้ให้เป็นชื่อคอลัมน์ที่แท้จริงในไฟล์ Excel
    name: item["Name"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    milestone1: item["Milestone1"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    milestone2: item["Milestone2"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    milestone3: item["Milestone3"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    budget: item["Budget"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    user_res: item["Res"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    plan: item["Plan"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
    remark: item["Remark"], // แก้ให้ตรงกับชื่อคอลัมน์ใน Excel
  }));
};

exports.read = async (req, res) => {
  try {
    const { id } = req.params; // ถ้าใช้ URL params เช่น /api/resource/:id
    if (!id) {
      return res.status(400).json("Primary key (id) is required");
    }
    const ShowData = await ProjectModel.findByPk(id);
    res.status(200).json(ShowData);
  } catch (e) {
    res.status(500).json("Server Error" + e.message);
  }
};

exports.list = async (req, res) => {
  try {
    const ShowDataList = await ProjectModel.findAll();
    res.status(200).json(ShowDataList);
  } catch (e) {
    res.status(500).json("Server Error" + e.message);
  }
};

// ฟังก์ชันสำหรับนำเข้าข้อมูลจากไฟล์
exports.importData = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "Please upload a file" });
    }

    // ใช้ path ของไฟล์ที่อัปโหลด
    const filePath = path.join(__dirname, "../../uploads", file.filename);
    const data = parseExcel(filePath); // เรียกใช้ parseExcel เพื่อแปลงข้อมูล

    const addedData = [];
    for (const item of data) {
      try {
        const addData = await ProjectModel.create(item);
        addedData.push(addData);
      } catch (err) {
        console.error("Error adding data to database:", err.message);
      }
    }

    // ลบไฟล์ออกหลังจาก import เสร็จ
    fs.unlinkSync(filePath);

    res.status(200).json({
      message: "Import successful",
      data: addedData,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to import data: " + error.message });
  }
};

exports.exportData = async (req, res) => {
  try {
    const projects = await ProjectModel.findAll();
    const jsonData = projects.map((project) => project.toJSON());

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(jsonData);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Projects");

    // กำหนดให้เขียนเป็น binary string
    const excelBuffer = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "buffer",
    });

    // กำหนด headers ให้ถูกต้องและใช้การส่งข้อมูลแบบ binary
    res.setHeader("Content-Disposition", "attachment; filename=projects.xlsx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(Buffer.from(excelBuffer));
  } catch (error) {
    res.status(500).json({ error: "Failed to export data: " + error.message });
  }
};

// ฟังก์ชันสร้างข้อมูลจากการป้อนข้อมูลผ่าน API
exports.create = async (req, res) => {
  try {
    const addData = await ProjectModel.create(req.body);
    res.status(200).json(addData);
  } catch (e) {
    res.status(500).json({ error: "Server Error: " + e.message });
  }
};
exports.modify = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body; // ข้อมูลใหม่ที่ต้องการปรับปรุง

    if (!id) {
      return res.status(400).json("Primary key (id) is required");
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json("No data provided to update");
    }

    // เรียกใช้ method update() ของ Sequelize
    const [affectedRows] = await ProjectModel.update(updateData, {
      where: {
        id: id,
      },
    });

    if (affectedRows === 0) {
      return res.status(404).json("Data not found or no changes made");
    }

    res.status(200).json({ message: "Data updated successfully" });
  } catch (e) {
    res.status(500).json("Server Error: " + e.message);
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Primary key (id) is required");
    }

    // เรียกใช้ method destroy() ของ Sequelize
    const affectedRows = await ProjectModel.destroy({
      where: {
        id: id,
      },
    });

    // ตรวจสอบผลลัพธ์
    if (affectedRows === 0) {
      return res.status(404).json("Data not found or already deleted");
    }

    // ส่งข้อความว่าลบข้อมูลสำเร็จ
    res.status(200).json("Data deleted successfully");
  } catch (e) {
    res.status(500).json("Server Error: " + e.message);
  }
};
