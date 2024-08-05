const mongoose=require("mongoose") 


const Friend_Request_Schema=new mongoose.Schema({
    
        _id: {
            type:mongoose.Schema.ObjectId,
            required:true
       },
        senderId:{
            type:mongoose.Schema.ObjectId,
            required:true
       },
        receiverId: {
            type:mongoose.Schema.ObjectId,
            required:true
       },
        status: {
            type:String,
            required:true
        },
        createdAt: {
            type:Date,
            default:Date.now
        },
        updatedAt: {
            type:Date,
            default:Date.now
        }
})

const Friend_Request=new mongoose.model("Friend_Request",Friend_Request_Schema)
module.exports=Friend_Request