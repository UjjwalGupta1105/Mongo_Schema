const mongoose=require("mongoose") 


const Post_Schema=new mongoose.Schema({
    
        _id:{
             type:mongoose.Schema.ObjectId,
             required:true
        },
        userId:{
            type:mongoose.Schema.ObjectId,
            required:true
        },
        content: {
            type:String,
            required:true,
            trim:true,
            minLength:[10,"Content should Conatins more than 10 Characters"],
            maxLength:[80,"Content cannot exceed 80 Characters"]
        },
       createdAt: {
            type:Date,
            default:Date.now
        },
        updatedAt: {
            type:Date,
            default:Date.now
        },
        comments: [
          {
            userId:{
            type:mongoose.Schema.ObjectId,
            required:true
          },
            content: {
            type:String,
            required:true,
          },
           createdAt: {
            type:Date,
            default:Date.now
          },
           updatedAt: {
            type:Date,
            default:Date.now
          },
         }
       ]
      
})

const Post=new mongoose.model("Post",Post_Schema)
module.exports=Post