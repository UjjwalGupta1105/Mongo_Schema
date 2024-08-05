const mongoose=require("mongoose") 


const User_Details=new mongoose.Schema({
        _id:{
             type:mongoose.Schema.ObjectId,
             required:true
        },
        name:{
            type:String,
            required:[true,"Please Enter Your Name"],
            trim:true,
            minLength:[4,"Name should Conatins more than 4 Characters"],
            maxLength:[30,"Name cannot exceed 30 Characters"]
        },
        email:{
            type:String,
            required:[true,"Please Enter Your Email"],
            unique:true,
            validate:[validator.isEmail,"Please Enter a VAlid Email"]
        },
        dateOfBirth: {
            type:Date,
            required:true
        },
        password:{
            type:String,
            required:[true,"Please Enter Your Password"],
            minLength:[8,"Password Should contains atleast 8 Characters...."],
        },
        friends: [
          {
            friendId:{
                type:mongoose.Schema.ObjectId,
                required:true
            },
            status: {type:String}
          }
        ],
        createdAt: {
            type:Date,
            default:Date.now
        }
})

const User=new mongoose.model("User",User_Details)
module.exports=User