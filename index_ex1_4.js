// 널리쉬 연산자
const a = undefined;
const b = null;
const c = 'hahah';
const d = null;
const e = '하현지';

// 값이 확정되어있다 : null or undefined가 아니다

console.log(a ?? b ?? c ?? d ?? e) ;


// 스프레드 문법 - 값을 펼쳐서 보여줌
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

// 두개의 배열을 합쳐서 새로운 배열을 만들고싶음
const newNumbers = [...numbers, ...numbers2];

console.log(newNumbers);
console.log(...newNumbers);



