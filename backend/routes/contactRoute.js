const express=require("express");
const contactModel=require("../models/contact.js")


const app=express();

// krijoni kalonni info nga databaza perdoret metoda post
// bejeni funksionin async dhe duhet te perdorni await,body thote qe jane info nga front end
app.post('/addContact', async(req,res)=>{
    try{
        console.log(req.body)
        // ka marr info nga frontend
        const newContact=new contactModel(req.body)
        // ruajtja e info
        await newContact.save()
        res.status(200).send(newContact)
    }catch(err){
        console.log("500 Contact not saved",err)
        // shfaqet te inspecti sms
        res.status(500).send("Contact not saved",err)

    }
});

module.exports=app