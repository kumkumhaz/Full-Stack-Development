//   CUSTOM MIDDLEWARE////

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

function logger(req, res, next){
    console.log("Request Method: ", req.method)
    console.log("Request URL: ", req.url);
    next();
}
app.use(logger);

app.get("/", (req, res) => {
    res.send("Hellow");
});
 
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});