import express from "express";
import bodyparser from "body-parser"
const app = express();
const port = "3000";


app.use(bodyparser.urlencoded({extended: true }));
app.get("/", (req, res) => {
    // console.log(req.body);
    //  res.send("<h1>Hello</h1>");
     res.render("passing.ejs");
})

app.post("/submit", (req,res) => {
    const nuOFLetter = req.body["fName"].length + req.body["lName"].length;
    // console.log(nuOFLetter);
    res.render("passing.ejs", {numOfLetters: nuOFLetter});
});

app.listen(port, () => {
    console.log("Server running on port 3000, passing data.");
})
