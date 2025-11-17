const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/',async(req,res)=>{
    try{
      const data = req.body// Assuming the requesst body contains the person data

      //Create a new Person document using Mongoose model
      const newPerson = new Person(data);

      //Save the new Person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error '});
    }
  }
)
//Get method to get the person
router.get("/",async (req,res)=>{
  try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
  }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error '})
  }
})
router.get('/:workType',async(req,res)=>{
  try{
    const workType =req.params.workType;
    if(workType=='Chef'|| workType=='manager'|| workType=='waiter'){

      const response =await Person.find({work:workType});
      console.log('response fetched');
      res.status(200).json(response);
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  }
)

router.put('/:id',async(req,res)=>{
  try{
    const personId= req.params.id;//Extract the Id from the URL parameter
    const updatedPersonData = req.body;//Updated data for the person

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
      new: true,//Return the updated document
      runValidators: true,//Run mongoose validation
    })

    if(!response){
      return res.status(404).json({ error: 'Person not found'});

    }

    console.log('data Updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server Error'});

  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const personId= req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({ error: 'Person not found'});

    }
    console.log('data Deleted');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server Error'});
  }
})


module.exports = router;