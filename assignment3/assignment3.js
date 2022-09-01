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

var data = [{"firstName": "John",
"lastName": "Doe",
"salary": "25000",
"department": "HR",
"lastCompany": "X",
"lastSalary": "10000",
"overallExp": "2",
"contactInfo": "1234567890",
"yearGrad": "2016",
"gradStream": "CSE"
}]





