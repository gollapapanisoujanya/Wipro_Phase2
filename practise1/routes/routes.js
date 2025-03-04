const express= require("express");
const { getEmployees, getEmployeeById , createEmployee, editEmployee, deleteEmployee } = require("../controllers/Employee");
var router = express.Router();


router.get("/", (req, res)=> res.send("hello3"))
router.get("/aboutus", (req, res)=> res.send("ABOUT US"))

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees/add", createEmployee);
router.delete("/employees/delete/:id", deleteEmployee);
router.put("/employees/edit/:id", editEmployee);

module.exports = router;