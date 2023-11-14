// Use JavaScript to Create a game of snake , water and gun.
//The Game Should ask you to Enter S,W and G. 
//The computer should be able to randomly generate S,W or G and declare win or loss using alert.
//Use Confirm And prompt whenever required.

// do{
//     let inp = prompt("enter S, G or W");
//     let rand = Math.floor(Math.random()*3);
//     let val;
//     if(rand == 0){
//       val = "S";
//     }
//     else if(rand == 1){
//       val = "W";
//     }
//     else if(rand == 2){
//       val = "G"
//     }
//     if(inp==val){
//       alert("you win");
//     }
//     else{
//       alert("you lose");
//     }
//     ask = confirm("want to play again ?");
//     }while(ask)
    

// let arr = ['snake','water','gun']
// let inp;
// let pos;
// let cpoint=0
// let upoint=0

// for(let i = 0; i<arr.length; i++){
//     inp = prompt('Enter your choice: [snake, water, gun]').toLowerCase()
//     pos = Math.floor(Math.random() * 3);
//     if(arr[pos]=='snake' && inp=='water'){
//         cpoint++
//     }
//     else if(arr[pos]=='water' && inp=='snake'){
//         upoint++
//     }
//     else if(arr[pos]=='snake' && inp=='gun'){
//         upoint++
//     }
//     else if(arr[pos]=='gun' && inp=='snake'){
//         cpoint++
//     }
//     else if(arr[pos]=='water' && inp=='gun'){
//         upoint++
//     }
//     else if(arr[pos]=='gun' && inp=='water'){
//         cpoint++
//     }   
//     console.log("computer:",arr[pos])  // debugging purpose
//     console.log("User:",inp) // debuggin purpose
// }
// if(cpoint>upoint || upoint>cpoint){
//     if(cpoint>upoint)
//         console.log("Computer wins")
//     else
//     console.log("User wins")
// }
// else
//     console.log('Match draw!')



// let chance = 0;
// while(chance!==10){
// let user_guess = prompt("choose between snake , water and gun")
// var values = ["snake","water","gun"];
// let computer_guess = values[Math.floor(Math.random() * values.length)];

// if (computer_guess == "snake" && user_guess == "gun"){
// alert("user win")
// }
// else if (computer_guess == "gun" && user_guess == "snake"){
// alert("computer win")
// }
// else if (computer_guess == "water" && user_guess == "snake"){
// alert("user win")
// }
// else if (computer_guess == "snake" && user_guess == "water"){
// alert("computer win")
// }
// else if (computer_guess == "water" && user_guess == "gun"){
// alert("computer win")
// }
// else if (computer_guess == "gun" && user_guess == "water"){
// alert("user win")
// }
// chance++;
// }
// if (chance === 10){
// console.log("try next time")
// }
// console.log("computer guess was:",computer_guess)
// console.log("user guess was",user_guess)


    let user = prompt("Enter S, W or G");
    let cpuI = Math.floor(Math.random() * 3);
    let cpu = ["S" , "W" , "G"][cpuI];

    const match = (cpu, user) =>{
        if(cpu === user){
            return "Matche draw";
        }
        else if(cpu === "S" && user === "W"){
            return "cpu";
        }
        else if(cpu === "S" && user === "G"){
            return "user";
        }
        else if(cpu === "G" && user === "W"){
            return "user";
        }
        else if(cpu === "G" && user === "S"){
            return "cpu";
        }
        else if(cpu === "W" && user === "S"){
            return "user";
        }
        else if(cpu === "W" && user === "G"){
            return "cpu";
        }
    }
    let result = match(cpu, user);
    document.write(`CPU: ${cpu} <br> and USER: ${user} <br> The winner is : ${result.toUpperCase()}`);
