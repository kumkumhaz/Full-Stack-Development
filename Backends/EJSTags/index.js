import express from "express";
const app = express();
const port = 3000;

app.get ("/", (req, res)=> {
    const data = {
        title: "EJS Tags",
        second: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<strong>This is my strong text"
    };
    res.render("index.ejs", data);
})

app.listen(port, () => {
    console.log(`Server is runnig on port${port}.`);
});