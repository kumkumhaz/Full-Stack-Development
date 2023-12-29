/// import
const verifyCardModule = require("./verifyCard");
async function placeOrder(){
    // wait for this to finish before executing next statement
    try{
        
        const result = await verifyCardModule.verifyCard(2022);
        console.log(result);
        throw new Error ("Error after promise is resolved") // will be handled by catch block 
}catch(err){
    console.log(err);
    return;
}
deductAmount();
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}
placeOrder();