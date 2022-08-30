const MongoClient = require("mongodb").MongoClient

const url = "mongodb://127.0.0.1:27017/client"

MongoClient.connect(url,(err,suc)=>{
  if (err) console.log(err)
 console.log("connection created")


const data = suc.db("Human_Resource");
 data.createCollection("employee",(err,suc)=>{
  if(err) console.log(err);
  console.log("collection is created");

const details = ([{
  "firstName": "John","lastName": "Doe","salary": 25000,"department": "HR","lastCompany": "X","lastSalary": 10000, "overallExp": 2,"contactInfo": 1234567890,"yearGrad": 2016,"gradStream": "CSE"},

  {"firstName": "Rohan", "lastName": "Jame","salary": "30000","department": "Technical", "lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860", "yearGrad": "2015", "gradStream": "CSE"},
  
  {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},
  
  {"firstName": "Sao","lastName": "Avika", "salary": "30000", "department": "Sales","lastCompany": "Y","lastSalary": "15000", "overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
   
  {"firstName": "Jame", "lastName": "roh","salary": "35000", "department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"},
  
  {"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860", "yearGrad": "2015","gradStream": "CSE"},
  
  {"firstName": "Jame", "lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z", "lastSalary": "20000","overallExp": "1","contactInfo": "123567890", "yearGrad": "2019","gradStream": "ECE"},
  
  {"firstName": "Sao","lastName": "Avika","salary": "30000", "department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
  
  {"firstName": "Jame", "lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z", "lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019", "gradStream": "EEE"},
  
  {"firstName": "Rohan", "lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
  
  {"firstName": "Jame","lastName": "Doe","salary": "35000", "department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},
  
  {"firstName": "Sao","lastName": "Avika","salary": "30000", "department": "Sales", "lastCompany": "Y","lastSalary": "15000","overallExp": "2", "contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
  
  {"firstName": "Jame","lastName": "Doe", "salary": "35000","department": "Accounts","lastCompany": "Z", "lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"
}])
// data.collection("employee").insertMany(details,(err,suc)=>{
//      if(err) console.log(err);
//      console.log(suc)
   

  //  data.collection("employee").find().toArray((err,res)=>{
  //   if(err) console.log(err)
  //   console.log(res)

    //  data.collection("employee").find({salary:{$gt:"30000"}}).toArray((err,res)=>{
    //   if(err) console.log(err)
    //    console.log(res)

       
    //  data.collection("employee").find({overallExp:{$gt:"2"}}).toArray((err,res)=>{
    //   if(err) console.log(err)
    //    console.log(res)
    
     
    //  data.collection("employee").find({yearGrad:"2015"},{overallExp:{$gt:"1"}}).toArray((err,res)=>{
    //   if(err) console.log(err)
    //   console.log(res)
     
    
    data.collection("employee").updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}},(err,res)=>{
      if(err) console.log(err)
      console.log(res)
    })

    data.collection("employee").deleteMany({lastCompany:"Y"},(err,res)=>{
      if(err) console.log(err)
      console.log(res);
    })
    })

     
      })
//  })

      

  // })
  //})  


// })
 //})