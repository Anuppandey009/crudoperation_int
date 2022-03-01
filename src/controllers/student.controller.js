//*********************************  CRUD OPERATION  *************************************************//

const express = require('express');

const{body,validationResult} = require('express-validator')

const Student = require("../models/student.model");
const router = express.Router();

//*********************************  POST STUDENT CRUD OPERATION  *************************************//

router.post("/",
    
        async(req,res)=>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                console.log(errors)
                return res.status(400).send("Email already exists")
            }
            const user = await Student.create(req.body);
            res.status(200).json({data:user});
        })

//*********************************  GET ALL STUDENT REQUEST CRUD OPERATION  *************************************//

router.get("/",async(req,res)=>{
    
    const user = await Student.find().lean().exec();
    res.send(user)
})

//*********************************  GET STUDENT BY MONGO ID REQUEST CRUD OPERATION  *************************************//

router.get("/:id",async(req,res)=>{
    
    const user = await Student.find({
        _id:req.params.id
    });
    res.send(user)
})

//*********************************  UPDATE STUDENT BY MONGO ID REQUEST CRUD OPERATION  *************************************//

router.patch("/:id",async(req,res)=>{
    
    const user = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      res.status(200).send({ user});
})

//*********************************  DELETE STUDENT BY MONGO ID REQUEST CRUD OPERATION  *************************************//

router.delete('/:id', (req, res) => {
    Student.deleteOne(
      { _id:req.params.id }
    )
      .then(result => {
        res.json(`Deleted`)
      })
      .catch(error => console.error(error))
  })
module.exports = router;