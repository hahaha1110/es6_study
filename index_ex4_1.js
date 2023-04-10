const arr = ['1', '2', '3'];
const name = ['one', 'two', 'three'];

console.log(arr.concat(name));

// reduce
const arr2 = [1, 2, 3, 4, 5];
const reducer = (acc, value) => acc + value;

console.log(arr2.reduce(reducer)); // 필수인자로 리듀서가 필요