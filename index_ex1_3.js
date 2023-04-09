const obj = {
    name : '하현지',
    job : '개발자',
};

console.log(obj);

// 점표기법
console.log(obj.name); // 하현지

// 대괄호 표기법(키값을 문자열로 지정)
console.log(obj['name']); // 하현지


const arr = [1,2,3,{name : '하현지'}]; // 중첩

console.log(arr);


const obj2 = {
    arr : [1, 2, 3],
    somethig : {
        name : '하현지',
        job : '개발자',
    },
};

console.log(obj2);