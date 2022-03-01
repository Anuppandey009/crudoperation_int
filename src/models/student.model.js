const mongoose = require("mongoose");
const student = require("../controllers/student.controller")
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    roll_no:{
        type:Number,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
    versionKey:false
}
)

const Student = mongoose.model("student",studentSchema);
module.exports = Student;