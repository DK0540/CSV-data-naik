const mongoose = require("mongoose")
 
const StudentSchema = new mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type:String
    },
    contact:{
        type:String
    },
    studentId: {
        type:String
    }
})
const StudentModal =  mongoose.model("student", StudentSchema)

module.exports = StudentModal;