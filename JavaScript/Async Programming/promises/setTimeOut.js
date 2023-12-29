/// import
// const verifyCardModule = require("./verifyCard");
// function placeOrder(){
//     // verify card
//     const promise = verifyCardModule.verifyCard(2022);
//     // waiting for promise to complete
//     promise.then(
//         // when promise is fullfilled
//         (msg) =>{
//             console.log(msg);
//             throw new Error("error inside then fulfilled callback")
//             deductAmount();
//         },
//         //when promise is rejected
//         (err) =>{
//             console.log("Erorr handling inside then")
//             console.log(err);
//         }
//     ).catch((err) =>{
//         console.log("Recieved in catch function");
//         console.log(err);
//     });
// }

// function deductAmount(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Amount deducted");
//     }
// }
// placeOrder();