const express=require('express');
const app=express();
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const keys=require('./config/keys');
const User=require('./models/user')
mongoose.connect(keys.mongoURI);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");
app.get('/',function(req,res)
{
    res.render("home")
}
);


 //for checking if server is running or not
 const PORT = process.env.PORT || 5000;
app.listen(PORT,function(err)
{
    if(err)console.log("HEY error start your server first")
console.log("server is running");
});