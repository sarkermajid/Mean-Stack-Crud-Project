const express = require("express");
const {getAllEmployees, createEmployee, getOneEmployee, updateEmployee, deleteEmployee} = require("../controllers/employee.controller");
const router = express.Router();


router.get('/', getAllEmployees);
router.post('/add-employee', createEmployee);
router.get('/:id', getOneEmployee);
router.put('/update-employee/:id', updateEmployee );
router.delete('/:id', deleteEmployee);

module.exports = router;