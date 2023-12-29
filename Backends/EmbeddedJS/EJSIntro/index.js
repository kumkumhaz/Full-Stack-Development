import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res ) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    console.log(dayOfWeek); // Outputs a number between 0 and 6
      let type = "a weekday";
      let adv = "it's time to work hard";
    
      if(dayOfWeek === 0 || dayOfWeek === 6){
        type = "the weekend";
        adv = "it's time to have some fun";        
      }
    res.render("index.ejs" , {
        dayType: type,
        advice: adv,
    })
    // res.send("<h1>Hello World.</h1>")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})