const express = require('express');
const router =express.Router();
const studentsController =require('../Controllers/Student_controllers')


router.get('/', studentsController.getAllStudents);
router.post('/create', studentsController.createStudent);
router.put('/update/:id', studentsController.updateStudent);
router.delete('/remove/:id', studentsController.deleteStudent);


module.exports = router;