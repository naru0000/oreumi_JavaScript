// 비교 연산자

let a = 3;
let b = 5;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

let c = "5";

console.log(b == c); // 값만 비교
console.log(b != c); // 값만 비교(불일치 연산자)
console.log(b === c); // 값과 데이터 타입 모두 비교
console.log(b !== c); // 값과 데이터 타입 모두 비교(불일치 연산자)

// 만약에 입력한 값이 3이라면, '로또당첨', 아니라면 '꽝'

let userNumber = 7;

if (userNumber === 7) {
    console.log("로또당첨");
} else {
    console.log("꽝");
}

// 만약에 입력한 값이 짝수라면, '짝수' , 홀수라면 '홀수'를 출력하고 싶다.
// 조건식

let number = 5;

if (number % 2 === 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}
