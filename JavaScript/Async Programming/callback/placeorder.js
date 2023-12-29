
/*
/// place order
const verifyCardModule = require("./verifyCard");
function placeOrder(){
    // 1. Verify card
    verifyCardModule.verfyCard(deductAmount);
    // 2. deduct amount
}
function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");

    }

}
placeOrder();
*/


/// place order
const upivarification = require("./verifyCard");
function placeOrder(){
    console.log("Order Placed");

    // 1. Verify card
    // 2. deduct amount
}
function validatePaymentSystem(){
    upivarification.verify("xyz@okicici", deductAmount);
}
function deductAmount(err){
        console.log("Amount deducted");
}
validatePaymentSystem(); // assigned to node js
placeOrder();   //done by main thread
//deductAmount();