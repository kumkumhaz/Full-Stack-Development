import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
//    res.send("<h1>Home</h1>");
   res.render("index.ejs")
})
app.get("/about", (req, res) => {
//    res.send("<h1>About</h1>");
   res.render("about.ejs");
})
app.get("/contact", (req, res) => {
//    res.send("<h1>Contact</h1>");
   res.render("contact.ejs")
})

app.listen(port, () => {
   console.log("Listening on port 3000000");
});
