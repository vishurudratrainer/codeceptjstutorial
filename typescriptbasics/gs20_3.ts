let list = [1,2,3,4];
const addOne = (acc, element) => [element + 1, ...acc];
const listLeft = list.reduce(addOne, []);
const listRight = list.reduceRight(addOne, []);
console.log(listLeft)
console.log(listRight)