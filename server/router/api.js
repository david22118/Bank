const express = require("express");
const router = express.Router();
const Transaction =require("../model/Transaction") 





router.get('/transactions', function (req, res) {
    Transaction.find({})
        .exec(function (error, transaction) {
            res.send(transaction)
        })
})

router.post('/transaction',function(req,res){
    const transaction =req.body
    const newTransaction= new Transaction({
        amount:transaction.amount,
        category:transaction.category,
        vendor:transaction.vendor
    })
    newTransaction.save().then(function(){
        Transaction.find({})
        .exec(function (error, transaction) {
            res.send(transaction)
        })
    })
})

router.delete('/transaction/:TransactionId',function(req,res){
   const id = req.params.TransactionId
   Transaction.findById({_id:id})
   .exec(function(error,transaction){
      transaction.remove(function(){
        Transaction.find({})
        .exec(function (error, transaction) {
            res.send(transaction)
        })
      })
   })


})


module.exports = router