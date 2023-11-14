// change the title of the card to red
//  let cardTitle = document.getElementsByClassName("card-title")
// cardTitle.style.color = "red";
// let cardTitle = document.getElementsByClassName("card-title")[3]
// cardTitle.style.color = "red";

// let firstCardTitle = document.getElementById("firstcardtitle")
// firstCardTitle.style.color = "red";

let cardTitle = document.querySelectorAll(".card-title")
//console.log(cardTitle)
cardTitle[0].style.color = "blue"
cardTitle[1].style.color = "pink"
cardTitle[2].style.color = "green"
cardTitle[3].style.color = "purple"

let btn1 = document.querySelector(".this")
btn1.style.color = "black"
btn1.style.background = "lightblue"

//console.log(document.getElementsByTagName("a"))
//console.log(document.body.getElementsByTagName("a"))
// let alink = document.getElementsByTagName("a")
// alink.style.color = "red";

console.log(document.getElementsByName("search"))
