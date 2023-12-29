import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World.</h1>")
})
app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>About Me.</h1><p>My name is kumkum, I am a full stack developer");
})
app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Contact Me.</h1><p>Phone: 9876543210</>");
});

app.post("/register", (rq, res) => {
    res.sendStatus(201);
});

app.put("/user/kumkum", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/kumkum", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/kumkum", (req, res) => {
    res.sendStatus(200);
});

 app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
 });