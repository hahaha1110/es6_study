function sum(a, b){ 
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

sum(10, 20, 30); 

// Rest Parameter
function print(a, b, ...rest){// a 와 b를 제외한 나머지 파라메터를 받은걸 묶어서 사용하고 싶을 때
    console.log(a);
    console.log(b);
    console.log(rest);
    
}

print(10, 20, 30, 40, 50, 60, 70);