const {v4: uuidv4} = require('uuid');
const Employee = require('../models/employee.model')

const getAllEmployees = async (req,res)=>{
    try {
        const allEmployee = await Employee.find();
        res.status(200).json(allEmployee)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const createEmployee = async (req,res)=>{
    try {
        const newEmployee = new Employee({
            id: uuidv4(),
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            department: req.body.department
        })
        await newEmployee.save();
        res.status(200).json(newEmployee);
    } catch (error) {
        res.status(5000).send(error.message);
    }
}

const getOneEmployee = async (req,res)=> {
    try {
        const oneEmployee = await Employee.find({id: req.params.id})
        res.status(200).json(oneEmployee)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateEmployee = async (req,res)=>{
    try {
        const oldEmployee = await Employee.findOne({id: req.params.id});
        oldEmployee.fullname = req.body.fullname;
        oldEmployee.username = req.body.username;
        oldEmployee.email = req.body.email;
        oldEmployee.department = req.body.department
        await oldEmployee.save();
        res.status(200).json(oldEmployee);
    } catch (error) {
        res.status(5000).send(error.message);
    }
}

const deleteEmployee = async (req,res)=>{
    try {
        await Employee.deleteOne({id: req.params.id});
        res.status(200).json({message: "Employee is deleted"});
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = {getAllEmployees, createEmployee, getOneEmployee, updateEmployee, deleteEmployee};