// 구조분해할당
let a = 123;
let b = 456;

[a, b] = [456,123];

console.log(`a의 값은 ${a} 이고 b의 값은 ${b}입니다.`);

const sushi = ['광어초밥', '참치초밥', '도미초밥', '고등어초밥', '연어초밥'];
const [one , ,three , , five] = sushi;

console.log(`내가 좋아하는 초밥은 ${one}, ${three}, ${five} 입니다.`);