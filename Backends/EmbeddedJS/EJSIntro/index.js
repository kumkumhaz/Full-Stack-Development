import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res ) => {
    // const today = new Date("February 18, 2024 11:13:00");
    const today = new Date();
    const day = today.getDay();
    console.log(day); // Outputs a number between 0 and 6
      let type = "a weekday";
      let adv = "it's time to work hard";
    
      if(day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to have some fun";        
      }
      // else{
      //    type = "a weekday";
      //    adv = "it's time to work hard";
      // }


    res.render("index.ejs" , {
        dayType: type,
        advice: adv,
    })
    // res.send("<h1>Hello World.</h1>")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})

