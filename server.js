const express = require("express");
const path = require("path");
/* const Transaction =require("./server/model/Transaction") */
const api =require('./server/router/api')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const app = express();
mongoose.connect('mongodb://localhost/BankDB', { useNewUrlParser: true, useUnifiedTopology: true })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use('/', api)






app.listen(port, function () {
    console.log(`server is running on port ${port}`);
  });