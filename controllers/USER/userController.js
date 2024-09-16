//สร้างcontroller  export ส่งออก . ชื่อตัวแปล
const {UserModel,VerificationModel} =  require('../../models/associate')
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

exports.read = async(req,res)=>{
    try{
        const { id } = req.params; // ถ้าใช้ URL params เช่น /api/resource/:id
        if (!id) {
          return res.status(400).json('Primary key (id) is required');
        }
        const ShowData = await UserModel.findByPk(id);
        res.status(200).json(ShowData);
     }catch(e){
         res.status(500).json('Server Error' + e.message);
     }
}

exports.list = async(req,res)=>{
    try{
       const ShowDataList = await UserModel.findAll(
        {
          include:[
            {
              model:VerificationModel,
              as:'userVerification'
            }
          ]
        }
       );
       res.status(200).json(ShowDataList);
    }catch(e){
        res.status(500).json('Server Error' + e.message);
    }
}
//เพิ่มuser
exports.create = async(req,res)=>{
  const { fisrt_name, last_name, email, password, address,role_id, organize_id } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_VERIFY_USER,
      pass: process.env.EMAIL_VERIFY_PASS
    }
  });

  try {
    const token = crypto.randomBytes(32).toString('hex');
      //เพิ่มuser ในตาราง user
    const user = await UserModel.create({
      fisrt_name,
      last_name,
      email,
      password,  // Password will be hashed automatically
      address,
      role_id,
      organize_id,
    });

    //เพิ่มtoken ในตาราง verify
    const VerifyToken = await VerificationModel.create({
      user_id:user.id,
      verificationToken: token,
      verificationTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
    });

    const verificationUrl =  process.env.BASE_URL +`/verify/${token}`;

    await transporter.sendMail({
      to: email,
      subject: `เรียนคุณ ${fisrt_name} ${last_name},`,
      html: `<p >ขอบคุณที่ลงทะเบียนกับเรา! เพื่อเปิดใช้งานบัญชีของคุณให้เต็มรูปแบบ โปรดยืนยันที่อยู่อีเมลของคุณโดยคลิกที่ลิงค์ด้านล่าง:</p>
      <p>Please verify your email by click this link: <a href="${verificationUrl}">Verify Email</a></p>
      <p>เราหวังว่าคุณจะมีประสบการณ์ที่ดีที่สุดกับบริการของเรา!</p>
      <p> ด้วยความเคารพ,</p>
      <p>MRV</p>
      <p>______________________________________________________________________</p>
      <p>ข้อความนี้ถูกสร้างขึ้นโดยอัตโนมัติ โปรดอย่าตอบกลับ</p>
      `
    });

    res.status(201).json({ message: 'User registered. Please verify your email.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//เข้าสู่ระบบ
exports.process = async(req,res)=>{
  const { email, password } = req.body;
    try {
        const user = await UserModel.findOne(
          { where: { email: email },
        
          include:[
            {
              model:VerificationModel,
              as:'userVerification'
            }
          ]
           },
        
        );
    
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        if (user.userVerification.isVerified === 0) {
          return res.status(403).json({ error: 'Email not verified' });
      }

        // Check if the user is already logged in
        if (user.sessionId) {
            return res.status(403).json({ error: 'User is already logged in' });
        }

        // Create a new session ID
        const sessionId = crypto.randomBytes(16).toString('hex');
        user.sessionId = sessionId;
        await user.save();

        // Create JWT token
        const secretKey = process.env.SECRET_KEY; // Replace with your actual secret key
        const token = jwt.sign({ userId: user.id, email: user.email, sessionId: sessionId }, secretKey, { expiresIn: '2h' });

        // Send JWT token to the client for authentication
        res.status(200).json({ message: 'success', token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.logout = async(req,res)=>{
  const { email } = req.body;
    try {
        const user = await UserModel.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.sessionId = null; // หรือจัดการการล็อกเอ้าท์ตามที่ต้องการ
        await user.save();

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
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
      const [affectedRows] = await UserModel.update(updateData, {
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
      const affectedRows = await UserModel.destroy({
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
  