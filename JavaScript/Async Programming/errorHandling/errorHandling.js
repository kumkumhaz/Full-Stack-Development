module.exports.verify = (upi ,cb) =>{
    setTimeout(() =>{
        try{
            throw new Error("error while verification");
            console.log("Card Verified");
          cb();
        }
        catch(ex){
            cb(ex);
        }
    },4000);
  }