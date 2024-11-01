 const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/associate');
const { default: next } = require('next');

exports.authCheck = async(req,res,next) =>{
    try{
        const headerToken = req.headers.authorization
        if(!headerToken){
            return res.status(401).json({message:'No Token, Authorization'})
        }

        const token = headerToken.split(" ")[1];
        const decode = jwt.verify(token,process.env.SECRET_KEY);
        req.user = decode
      next()
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Token Invalid'});

    }
}

exports.adminCheck = async(req,res,next)=>{
    try{
        const {email} = req.user
        console.log(email);
        const adminUser = await UserModel.findOne({
            where:{
                email:email
            }
        });
        if(!adminUser || adminUser.role_id !== 1){
            return res.status(403).json({message:'Acess denied Admin'});
        }
       /*  console.log('admin check',adminUser); */
        next();
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Admin access denied'});
    }
}