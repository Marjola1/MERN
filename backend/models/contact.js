const mongoose=require("mongoose")
const contactSchema =new mongoose.Schema({
    firstName:{ 
    type:String,
    required:true
    },
    description:{
        type:String,
    },
    photo:{
        type:String,
    },
});

const Contact=mongoose.model("Contact",contactSchema)
module.exports=Contact;