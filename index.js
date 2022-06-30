// MODULES AND GLOBALS
// Require Express
const express = require('express');
// Require Mongoose
const mongoose = require('mongoose');


//CONFIGURATION
//require dotenv
require('dotenv').config();
//initialize the app object
const app = express();

// mongoose can be called anywhere after the required mongoose
// The first argument that connect takes is the Mongo URI. 
// The second argument contains optional properties that get rid 
// of deprecation warnings.
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// Middleware
//parses JSON and puts it in req.body
app.use(express.json());

// HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 404 ROUTE
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND, GOSH, GIVE IT A REST</h1>')
})

// LISTEN FOR CONNECTIONS
app.listen(process.env.PORT)