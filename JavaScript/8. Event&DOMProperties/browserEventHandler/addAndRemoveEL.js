// btn.addEventListener('click',function(e){
//     alert("Hello World1 !")
// })
//  btn.addEventListener('click',function(e){
//     alert("Hello World2 !")
//  })

let x = function(e){
    console.log(e.target);
    console.log(e);
    console.log(e.type);
    alert("Hello World 1!")
}
// let y = function(e){
//     alert("Hello World 2 !")
// }
btn.addEventListener('click',x)
//btn.addEventListener('click',y)

// let a = prompt("Enter a number...");
// if(a == "2"){
//     btn.removeEventListener('click',x)
// }
