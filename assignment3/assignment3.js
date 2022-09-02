const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Human_resource"

const dbSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: Number,
  department: String,
  lastCompany: String,
  lastSalary: Number,
  overallExp: Number,
  contactInfo: Number,
  yearGrad: Number,
  gradStream: String
})

var employeeData = [{"firstName": "John",
"lastName": "Doe",
"salary": "25000",
"department": "HR",
"lastCompany": "X",
"lastSalary": "10000",
"overallExp": "2",
"contactInfo": "1234567890",
"yearGrad": "2016",
"gradStream": "CSE"
},{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "roh",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
}]

mongoose.connect(url,async(err,con)=>
{
  if(err)
  {
    console.log(err);
  }
  else 
  {
    console.log("Connection successful")
  }
  const employee = mongoose.model("employee",data);
  const insert = employee.insertMany(employeeData);
  console.log(insert);
  const docs = await employee.find({});
  console.log(docs);
  const salgt = {salary:{$gt:30000}}
  const salgrater = await employee.find(salgt);
  console.log(salgrater)
  const expgt = {overallExp:{$gt:2}};
  const experiencegt = await employee.find(expgt);
  console.log(experiencegt);
  const grdgt = {yearGrad:{$gt:2015},overallExp:{$gt:1}};
  const gebgt = await employee.find(grdgt);
  console.log(gebgt);
  const sal = {salary:{$gt:70000}}
  const salupdat = {$set:{salary:65000}}
  const salaupdate = await employee.updateMany(sal,salupdat);
  console.log(salaupdate);
  const empdel = {lastCompany:"Y"};
  const empdelete = await employee.deleteMany(empdel);
  console.log(empdelete)
})
