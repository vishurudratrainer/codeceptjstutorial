var foo = (x:number)=>10 + x 
console.log(foo(100))      //outputs 110 
var foo1 = (x:number)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo1(100)