function sum(a, b){ 
    console.log(a + b);
}

sum(10, 20);

// 위를 아래로 바꿈. 함수 이름만 빼서 변수에 대입
const sum2 = function (a, b){ 
    console.log(a + b);
}

sum2(10, 20);

// 화살표 표현식
const sum3 = (a, b) => a + b; // 한줄일 경우 중괄호 없어도 자동 return

console.log(sum3(10, 20));

// 중괄호로 묶여있을 경우, 자동 return이 되지 않기 때문에 값을 꼭 return시켜줘야 함
const sum4 = (a, b) => {
    return a + b;
}

console.log(sum4(10, 20));