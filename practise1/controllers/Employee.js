const { v4: uuidv4 } = require('uuid');

let Employees=[
   {
    id:"1001",
name:"Riya",
address:"Hyderabad",
dept:"HR",
manager:"Krish"
   } 
];

const getEmployees = (req,res)=>
    {
             res.send(Employees);
    }
    
    const getEmployeeById=(req,res)=>{
       const Employee = Employees.find((Employee)=>Employee.id === req.params.id);
       res.send(Employee)
    }
    
    const createEmployee = (req, res)=>{
     const Employee = req.body;
     console.log(Employee)
     Employees.push({...Employee, id:uuidv4()})
     res.send("Employee has been added")
    
    }
    
    
    const deleteEmployee = (req,res)=>{
         Employees = Employees.filter((Employee)=>Employee.id !== req.params.id);
         res.send("Employee record has been deleted")
    }
    
    
    const editEmployee = (req, res) =>
    {
        const Employee = users.find((Employee)=>Employee.id === req.params.id);
        Employee.name = req.body.name;
        Employee.email = req.body.email;
        Employee.contact = req.body.contact;
        res.send("Employee record has been edited")
      
    }
    
    module.exports = {getEmployees, getEmployeeById, createEmployee, deleteEmployee, editEmployee};
    