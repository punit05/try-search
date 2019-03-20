const express=require('express');
const app=express();
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const keys=require('./config/keys');
const User=require('./models/user');
const faker=require('faker');
const data=require('./db.json')
mongoose.connect(keys.mongoURI,function(err,db)
{
    if(err)console.log(err);
    
});
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");
app.get('/',function(req,res)
{
res.send("hey");
    
}
);
app.get('/state',function(req,res)
{


   if(req.query.search)
   {
       console.log(req.query.search);
      
    const regex = new RegExp(escapeRegex(req.query.search));
       User.find({state_name:regex},function(err,allstates)
    {
        if(err)console.log(err);
        else 
        {
            console.log("ans",regex);
            res.render("result",{data:regex})
        }
    })
   }
   else 
   {
       console.log("HERE");
    
       res.render("home",{data:data})
    console.log(req.query.search);
   }

})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


 //for checking if server is running or not
 const PORT = process.env.PORT || 5000;
app.listen(PORT,function(err)
{
    if(err)console.log("HEY error start your server first")
console.log("server is running k");
});