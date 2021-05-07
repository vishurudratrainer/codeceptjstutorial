var product = new Function("a", "b", "c= a * b;return c");
var x = product(4, 3);
console.log(x);
