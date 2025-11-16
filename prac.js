const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to my hotel')
})

app.get('/sujit',(req,res)=>{
    res.send('Sujit is studying in his room')
})

app.listen(4000,()=>{
    console.log('port is listening on 4000');
})