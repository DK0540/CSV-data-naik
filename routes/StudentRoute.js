const express = require("express")

const StudentModal = require('../model/Student ')


const router = express.Router()



// ROUTE 1: create an student using: POST "/api/student/post".
router.post('/post',  async (req, res) => {
    try {
        
        let student = await StudentModal.insertMany(req.body)
        res.status(200).json({sucess:true, student})

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Enternal server Error" })
    }
})



// ROUTE 2: get all  existing students using: GET "/api/student/getstudent".
router.get('/getstudent',  async (req, res) => {
    try {
        let student = await StudentModal.find()
        res.status(200).json({sucess:true , student})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Enternal server error"})
        
    }
    
})



// ROUTE 3: Update an existing student using: PUT "/api/student/updatestudent/:id". 
router.put('/updatestudent/:id',  async (req, res) => {
    const { name,age,contact,studentId } = req.body;

    try {
        // Create a newstudent object
        const newstudent = {};
        if (name) { newstudent.name = name };
        if (age) { newstudent.age = age };
        if (contact) { newstudent.contact= contact };
        if (studentId) { newstudent.studentId = studentId };


        
        student = await StudentModal.findByIdAndUpdate(req.params.id, { $set: newstudent }, { new: true })
        res.json({ student });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing student using: DELETE "http://localhost:5000/api/student/deltestudent/:id".
router.delete('/deltestudent/:id',  async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let student = await StudentModal.findById(req.params.id);
        if (!student) { return res.status(404).send("Not Found") }

       

        student = await StudentModal.findByIdAndDelete(req.params.id)
        res.json({ "Success": "student has been deleted", res: student });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;