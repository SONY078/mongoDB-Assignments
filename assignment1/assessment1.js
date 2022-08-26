show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
 db.employee.find().pretty()
{
        "_id" : ObjectId("63084a72cf6ac7f15f42fef9"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : 25000,
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : 10000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2016,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084b96cf6ac7f15f42fefa"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084b96cf6ac7f15f42fefb"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("63084b96cf6ac7f15f42fefc"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084c95cf6ac7f15f42fefd"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63084ce7cf6ac7f15f42fefe"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084ce7cf6ac7f15f42feff"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("63084ce7cf6ac7f15f42ff00"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff01"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff02"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff03"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff04"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff05"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
>
 db.employee.find({salary:{$gt:"30000"
... ... }}).pretty()
{
        "_id" : ObjectId("63084b96cf6ac7f15f42fefb"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("63084c95cf6ac7f15f42fefd"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63084ce7cf6ac7f15f42feff"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff01"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff03"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff05"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
>
db.employee.find({overallExp:{$gt:"2"}}).pretty()
 db.employee.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}).pretty()
{
        "_id" : ObjectId("63084c95cf6ac7f15f42fefd"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff01"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("63084ddbcf6ac7f15f42ff05"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
>
db.employee.updateMany({salary:{$gt:70000}},{$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
>
 db.employee.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }