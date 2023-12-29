// place order
// it imports the module
module.exports.verifyCard = (year) =>{
    const cardPromise = new Promise((success, failure) =>{
        setTimeout(() =>{
            try{
                throw new Error("Error while in promise");
                if(year >= 2022){
                    // call an API
                    success("verified");
                }else{
                    failure("failed because card is expired");
                }
            }catch(ex){
                console.log("error");
                console.log(ex);
                failure("failed because of error");
            }
        }, 1000);
    });
    return cardPromise
}



// module.exports.verifyCard = (year) =>{
//     const cardPromise = new Promise(( resolve, reject) => {
//         setTimeout(() =>{
//     //   // card is successfully varified
//     //         // console.log("Card Verified");
//     //         //     // task is completed successfully
//     //          resolve();

//     //         // when card is throwing an error
//     //         console.log("Card Not Verified");
//     //         reject("Failed because card is expired");
//     try{
//         throw new Error("Error while in promise");
//         if(year>= 2022){
//             resolve("veriied");
//         }else{
//             reject("Failed because card is expire");
//         }
//     }catch(ex){
//         console.log("error");
//         console.log(ex);
//         reject("failed because of error");
//     }

//         },1000);       
//     });
//     return cardPromise; 
// }