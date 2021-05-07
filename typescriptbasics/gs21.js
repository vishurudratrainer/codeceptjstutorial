var mt = [];
mt[0] = 120;
mt[1] = 234;
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size 
mytuple.push(12);
console.log(mytuple); // append value to the tuple 
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
