'use strict'
const express = require('express')
const bodyParser =require('body-parser')
const request = require('request')



const app = express()
app.set('port',(process.env.PORT || 5000))

//Allows us to process the data

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

//Routes

app.get('/',function(req,res){
    res.send("Sai i am chat bot");
})

//Facebok


app.get('/webhook',function(req,res){
    if(req.query['hub.verify_token']==="chatbot"){
        req.send(req.query['hub.challenge'])
    }
    res.send("Wrong Token")
})


app.listen(app.get('port'),function(value){
    console.log("running : port ai"+value);
});

