const mongoose = require('mongoose');

//Connect MongoDb
mongoose.connect('mongodb://localhost/creds', {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true}).catch(error => console.log(error.reason));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Schema
const Creds = new mongoose.Schema({
    name: {type:String , required:true },
    number : {type: Number , required:true } ,
    email : {type:String , required:true ,unique : true} ,
    pass : {type:String , required:true }
  });

//Models
const Details = mongoose.model('Details', Creds);

// //By default If database is empty
// const newuser = new Details({
//     name: "Shyam Rathod",
//     number : 456738434 ,
//     email : "abc@gmail.com" ,
//     pass : "1234"
// })

// newuser.save(err => {
//     if(err) return console.error("Error in schema file", err) ;
// })


//Exporting it out
module.exports = Details
