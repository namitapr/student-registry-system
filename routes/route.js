const express = require('express');
const router = express.Router();

const Student = require('../models/students');


// retrieving students
router.get('/student-list', (req, res, next)=>{
    Student.find(function(err, students){
        res.json(students);
    });
});

// add student
router.post('/new-student', (req, res, next) => {
    let newStudent = new Student({
        name: req.body.name,
        major: req.body.major,  
        email:  req.body.email,
        gradyear:  req.body.gradyear,
        number:  req.body.number
    });

    newStudent.save((err, student)=>{
        if(err){
            res.json({msg: 'Failed to add student'});
        } else {
            res.json({msg: 'Contact added successfully'});
        }
    });
});

// deleting student
router.delete('/student/:id', (req, res, next) => {
    Student.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;