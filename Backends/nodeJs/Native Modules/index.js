const fs= require("fs");


fs.writeFile("writemessage.txt", "hello from nodeJs!", (err) =>{
    if(err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("./readmessage.txt","utf8" ,(err, data) =>{
    if(err) throw err;
    console.log(data);
});

