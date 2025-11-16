const express =require('express')

const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


app.get('/', function(req, res)  {
  res.send('Welcome to my hotel......How can i help you?')
})


//Import thee router Files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes= require('./routes/menuItemroutes');

//Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000,()=>{
  console.log("listening on port 3000");
})