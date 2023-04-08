let hi = 'hahaha';     // let : es6의 변수
const hello = 'hello'; // const : es6의 상수 - 재할당시 오류. 반드시 처음에 초기화 필요

// hello = 'hello~'; // 오류
hi = 'hi;'

var abc = '111';
var abc = '222';  // 오류 안나고 222찍힘

console.log('hi :::' + hi); // hi
console.log('hello :::' + hello); // 오류
console.log('abc :::' + abc); // 222

