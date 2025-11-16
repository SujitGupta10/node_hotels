const express = require('express');
const router = express.Router();
const Menuitem = require('../models/MenuItem');


router.get("/",async (req,res)=>{
  try{
      const data = await Menuitem.find();
      console.log('data fetched');
      res.status(200).json(data);
  }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error '})
  }
})

router.post('/',async(req,res)=>{
    try{
      const data = req.body// Assuming the requesst body contains the person data

      //Create a new Person document using Mongoose model
      const newMenu = new MenuItem(data);

      //Save the new Person to the database
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error '});
    }
  }
)
router.get('/:workType',async(req,res)=>{
  try{
    const workType =req.params.workType;
    if(workType=='sweet'|| workType=='spicy'|| workType=='sour'){

      const response =await Menuitem.find({taste:workType});
      console.log('response fetched');
      res.status(200).json(response);
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  }
)
module.exports =router;