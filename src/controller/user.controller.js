const express=require('express')
const router=express.Router()
const app=express()
app.use(express.json());
const User=require("../models/user.model")

// Crud operation

router.post("/", async(req, res) => {
    const user = await User.create(req.body); 
    console.log(user);
    return res.status(200).json({user})
  });

  
router.get("/", async(req, res) => {
    //const users = await User.find().lean().exec();    
    console.log("anup pandey");
   // return res.status(200).json({users})
  });
  module.exports = router;