// math 객체

const num = 1234.567;
const num2 = 123.456;

console.log(Math.abs(-5));
console.log(Math.ceil(num));
console.log(Math.ceil(num2));
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.trunc(num));
console.log(Math.max(2, 3, 4, 5));
console.log(Math.min(2, 3, 4, 5));
console.log(Math.pow(2, 3));

console.clear();

// random을 사용하면 0~1미만의 난수를 출력
// Math.floor(Math.random() * 10 + 1)
// Math.ceil(Math.random() * 10)

let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

// 0~2까지의 난수 구하기
console.log(Math.floor(Math.random() * 3));

// rsp의 변수에 가위,바위,보 배열로 넣기
const rsp = ["가위", "바위", "보"];

console.log(rsp.length);
console.log(rsp[rsp.length - 1]);

// 신형
console.log(rsp.at(1)); // rsp [1]
console.log(rsp.at(-1)); // 뒤에서 1번째, rsp[-1] -> 실행불가

console.clear();
console.log(parseInt(num)); // 정수만 허용
console.log(parseFloat(num)); //실수까지 허용

// abs 절대값
// ceil() 올림
// floor() 내림
// round() 반올림
// trunc() 소수점 이하 버림
// max() 최대값
// min() 최소값
// pow() 제곱연산
