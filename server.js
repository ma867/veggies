//IMPORTING REQUIRED MODULES
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
// const {veggies} = require('./models/vegetables')
const Vegetable = require('./models/vegetable')
 
//CREATE EXPRESS APP OBJECT
const app = express()
 
//CONFIGURE EXPRESS APPS (app.set)
//Start Config

app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine

mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})
 
//End Config
 
//MOUNT MIDDLEWEAR (app.use)
//Start Middlewear
 
 
//End Middlewear
 
//MOUNT ROUTES
//Start Routes

// INDEX --- READ --- GET
// app.get('/vegetables', (req, res) => {
//    res.render('veggies/Index', {veggies})
// })

app.get('/vegetables', (req, res) => {
    Vegetable.find({}, (err, foundVegetables) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.render('veggies/Index', {
                veggies: foundVegetables
            })
        }
    })
})
 

// NEW (Not applicable in an api)
app.get('/vegetables/new', (req, res) => {
    res.render('veggies/New')
})

// DELETE

// UPDATE

// CREATE
app.post('/vegetables', (req, res)=>{
    //first get the info from the form -> req.body
    req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
    Vegetable.create(req.body,(err, createdVeggie) =>{
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.redirect('/vegetables')
        }
    })
})
// EDIT (not applicable in an api)


// SHOW ---- READ ---- GET
app.get('/vegetables/:i', (req, res) => {
    Vegetable.findById(req.params.i, (err, foundVeggie)=>{
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.render('veggies/Show', {
                veggie: foundVeggie
            })
        }

    })
})


//End Routes
 
 
 
//TELL APP WHICH PORT TO LISTEN TOS
app.listen(3002, () => {
   console.log("listening on port 3000")
})
