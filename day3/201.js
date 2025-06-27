// 삼항연산자 num이 숫자 10 이상인지를 판별해서 조건 출력(조건,절대값으로 비교)

const num = -13;
const result = num > 10 ? "10 이상이다" : "10 이하이다";

console.log(result);

// 숫자를 반올림해서 짝수/홀수 구분하여 찍기

const num2 = 4.6;

const result2 = Math.round(num2) % 2 === 0 ? "짝수" : "홀수";

console.log(result2);

// 난수를 발생(1~100 가지의 수) 해서 50 이상인지, 미만인지 구분하여 찍기

const randomNumber = Math.floor(Math.random() * 100) + 1;

if (randomNumber >= 50) {
    console.log("50 이상입니다");
} else {
    console.log("50 미만입니다.");
}

// 숫자를 3제곱한 수를 구하시오

const num3 = 2;
const result3 = Math.pow(num3, 3); // 2**3 이렇게 해도 됨

console.log(result3);

console.log(Number("50px")); // number는 px을 인식 못함

// 숫자가 3개, 가장 큰 값과 가장 작은 값을 구하시오.

const a = 3,
    b = 10,
    c = 5;

console.log(Math.max(a, b, c));
console.log(Math.min(a, b, c));

const arr = ["가위", "바위", "보"];
console.log(arr.length);
console.log(arr[arr.length - 1]);

console.clear();

// sum이라는 함수를 만드시오(숫자를 2개 받아서 (출입문 2개 -> 파라미터 2개) 더한값을 출력하는 기계)

function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);
