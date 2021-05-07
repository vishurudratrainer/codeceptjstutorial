function isBigEnough(element, index, array) { 
   return (element >= 10); 
} 
          
var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log("Test Value : " + passed );

var passed1 = [12, 5, 8, 130, 44].filter(isBigEnough); 
console.log("Test Value : " + passed1 );

let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
}); 

var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index );