// const myFun = ({x,y,z})=>
// {
//     console.log({x,y,z})
// }
// myFun(8,9,0);


// const a = {};
// const b = {
//     key: 'b'
// };
// const c ={
//     key : 'c'
// };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// console.log(void {});
// console.log(void "JSsnippets");
// console.log(void (0));
// console.log(void (2 == '4'));

// function rec( num){
//     return (num) ? num%10 + rec(num/10):0;
//     }
//     console.log(rec(4567));

// function my_recursive_function( n)
// {
//      if(n == 0)
//      return;
//      my_recursive_function(n-1);
//      console.log(n);
// }
//      my_recursive_function(10);

     // function something(n) 
     // { 
     // if(n <= 0) 
     // return 1;                             
     // else 
     // return n * something(n-1);   
     // } 
     // console.log(something(4)); 

     // function func(a,  b){
     //      if(b==0)
     //      return 0;
     //      if(b==1)
     //      return a;
     //      return a + func(a,b-1);
          
          
     //      }
          
     //     console.log( func(3,8));function print( n)

/*function print( n)
{
if (n == 0)
return;
console.log(n%2)
console.log(n/2);
}  
print(12);*/

// function sum( n) {
//      if (n==0)
//      return n;
//      else
//      return n + sum(n-1);    
//      }
     
//  console.log(sum(8));

//  function f(n){
//      if(n==1){
//      console.log(1);
//      return;
//      }
//      console.log(n);
//      f(n-1);
//      }  
//      f(21);  

//      function f1(b){
// if(b==0)
// return 0
// else 
// {
// console.log("a")
// f1(b--);
// }
// }
// console.log(f1(10));      


// function f(n){
//      if(n>0)
//      return (n+f(n-2));
//      }
//      console.log(f(10));

function power(x, y) 
{ 
        if( y==0) 
        return 1; 
        let temp = Math.pow(x, y/2);         
        if (y%2 == 0) 
                return temp*temp; 
        else
        { 
                if(y > 0) 
                        return x*temp*temp; 
                else
                        return (temp*temp)/x; 
        } 
} 
console.log(power(2,3));

// func(x, y) 
// { 
//         if (y == 0) 
//                 return 1; 
//         else if (y%2 == 0) 
//                 return func(x, y/2)*func(x, y/2); 
//         else
//                 return x*func(x, y/2)*func(x, y/2); 
// } 
// console.log(func(2,3));


     