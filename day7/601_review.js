//1. 이름과 나이를 입력받아서, `000님 나이는 00세입니다.` -> 함수표현식의 화살표함수로 만드세요

const sayHello = (name, old) => {
    return `${name}님 나이는 ${old}세입니다.`;
};

console.log(sayHello("고우리", 35));

// 2. 더하기 함수 a+b 인데, 만약 b가 입력되지 않았을 경우 b의 기본값은 10이 되도록 함수를 만드세요

function sum(a, b) {
    return a + b;
}

console.log(sum(3));

// 3. 함수의 인자로 숫자를 2개 받아서 배열로 리턴 -> 1,2 -> return [1,2]

function number(a, b) {
    return [a, b];
}

console.log(number(3, 5));

// 4. 함수의 인자로 이름과 나이를 받아서 객체로 리턴 -> 'Ghost',1000 -> return {name : 'Ghost', age : 1000}

function list(name, old) {
    return {
        name: name,
        age: old,
    };
}

console.log(`"Ghost",`, 1000);

// 5. 연도를 입력받아서 나이를 계산하는 함수 -> getAge(1900) -> 현재 getFullYear 연도를 구해서 차감

function age(birth) {
    const present = new Date();
    const year = present.getFullYear();
    const result = year - birth;
    return result;
}

console.log(age(1900));

// 6. for문으로 구구단 -> gugudan(3), gugudan(5) 제한, 구구단은 2-9단까지만 지원

function gugudan(number) {
    if (number < 2 || number > 9) {
        console.log("숫자를 올바르게 입력하세요.");
        return;
    }

    let result = "";

    for (let i = 1; i < 10; i++) {
        result += `${number} * ${i} = ${number * i}\n`;
    }
    return result;
}

// 7. 구조분해할당 -> 아래 배열을 앞의 2개만 변수로 받고,나머지는 나머지연산자로 할당하여 받으세요
const arr = [10, 20, 30, 40];

const [a, b, ...rest] = arr;

console.log(arr);

// 8. 구조분해할당 -> 아래 객체중 이름과 이메일만 변수로 할당하여 받으세요, 이 때 이름은 userName으로 변경하여 받으세요

const user = { id: 1, name: "Ghost", age: 1000, email: "ghost@gmail.com" };
