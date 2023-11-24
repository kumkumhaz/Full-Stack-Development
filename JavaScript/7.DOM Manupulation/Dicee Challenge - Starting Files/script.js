let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

let randomDiceImage1 = "dice"+ randomNumber1 +".png";
 let randomDiceImageSource1 = "images/" + randomDiceImage1;
 let image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomDiceImageSource1);

 let randomNumber2 = Math.floor(Math.random()*6)+1;
 let randomDiceImage2 = "dice"+ randomNumber2 +".png";
 let randomDiceImageSource2 = "images/" + randomDiceImage2;
 let image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomDiceImageSource2);

 if(randomDiceImage1 > randomDiceImage2){
    document.querySelector("h1").innerHTML = " Hoorayy... Player 1 win!";
 }else if(randomDiceImage2 > randomDiceImage1){
    document.querySelector("h1").innerHTML = " Hoorayy... Player 2 win!";
 }else{
    document.querySelector("h1").innerHTML = " Match Draw!"

 }