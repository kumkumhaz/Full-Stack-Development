//Write a program using prompt function to take input of age as a value from the user and use alert to tell  him if he can drive or not.

// Inabove question use confirm to ask the user if he wants to see the prompt again.
// In the previous question , use console.log.error to log the errror if the age entered is negative.
// Write a programme to change the URL to google.com(redirection), if user enters a number greaterthan 4
// Change the background of the page to yellow, red or any other color based on user input through prompt. 

// let yourNumber =true;

do{
    let number = prompt("Enter Your Age");
    number = Number.parseInt(number);
    if(number<0){
        console.error("Please Enter a valid Number");  
        alert("You Entered A Negative Number")        
    }
    else if(number>=18){
        alert("You are Eligible to Drive");
    }else{
        alert("You are Not Eligible to Drive");
    } 
    beConfirm = confirm("Do You Want To Enter You Number Again");  
}while(beConfirm)


// let number = prompt("Enter Your Age");
// number = Number.parseInt(number);
//     if(number>4){
//         location.href ="https://google.com";        
//     }
//     //  else if(number<0){
//     //     console.error("Please Enter a valid Number");  
//     //     alert("You Entered A Negative Number")        
//     // }
    
//     // confirm("Do You Want To Enter You Number Again");  


// let color = prompt("Enter Yoir Favorite Color");
// document.body.style.backgroundColor = color;
