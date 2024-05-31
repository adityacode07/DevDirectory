const mongoose=require('mongoose')

const FriendSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     resourcelink:{
      type:String,
      required:true
     },
     description:{
        type:String,
        required:true
     },
     imagelink:{
      type:String,
      required:true
     }
});

const FriendModel=mongoose.model('friend',FriendSchema)

module.exports=FriendModel