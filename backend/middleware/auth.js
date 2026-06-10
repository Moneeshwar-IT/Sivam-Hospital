const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{

  const token =
  req.headers.authorization;

  if(!token){

    return res.status(401).json({
      message:"No Token"
    });

  }

  try{

    jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    next();

  }catch(err){

    return res.status(403).json({
      message:"Invalid Token"
    });

  }

};