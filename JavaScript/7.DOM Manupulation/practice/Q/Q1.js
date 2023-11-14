// document.getElementsByTagName("nav")[0].firstElementChild.style.color= "red"; //first child red
// document.getElementsByTagName("nav")[0].style.color= "blue"; //all blue
//         //   or
// let  li = document.getElementsByTagName("nav")
// li[0].style.color =" red";

// document.getElementsByTagName("nav")[0].firstElementChild.style.color= "green";
// document.getElementsByTagName("nav")[0].lastElementChild.style.color= "green";

let li = Array.from(document.getElementsByTagName("li"))
li.forEach((element) =>{
    element.style.background = "pink";
})
        //     or
// Array.from(document.getElementsByTagName("li")).forEach((element) =>{
//     element.style.background = "pink";
// })



