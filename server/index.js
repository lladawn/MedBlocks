
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express() ;
const Details=  require('./Models/logcredentials') ;



//Setting up Cross Platform exchange
app.use(cors());

//Enabling json format
app.use(express.json());


// let details ={
//     email : "abc@gmail.com",
//     pass :"123456"
// }



app.post('/login' ,async (req,res) =>{
    try {
        console.log(req);
        let [detail] = await Details.find({email:req.body.email});   //Deconsrturcted from array
        if(detail)
        {   
            if(!(await bcrypt.compare(req.body.pass , detail.pass)))
                res.send("Password Incorrect!!") ;
    
        }
        else{
            res.send("Email Not Found.")
        }
        
        
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
    
})


app.post('/register' ,async (req,res) =>{

    let [detail] = await Details.find({email:req.body.email});   //Deconsrturcted from array
    if(detail)
    {
        res.send("Email already Exists.")
    }

    let hashedpass = await bcrypt.hash(req.body.pass, 10) ;
    // console.log(hashedpass) ;
    
    const newuser = new Details({
        name: req.body.name ,
        number : req.body.number ,
        email : req.body.email ,
        pass : hashedpass
    })

    await newuser.save(err => {
        if(err) return console.error("Error in schema file", err) ;
    })
    
    // let aw = await Details.find() ;
    res.send("Member Updated!!!!!");

})





// listen for requests
app.listen(process.env.port || 80, function(){
    console.log('Now listening for Requests....');
});

