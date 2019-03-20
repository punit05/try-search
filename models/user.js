const mongoose = require('mongoose');
const { Schema }=mongoose;



const userSchema = new Schema({
   state_id:String,
   state_name:String

});
//creating the collection users
module.exports=mongoose.model("User",userSchema);




