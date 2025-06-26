// quiz1. 입력한 나이에 따라 성인 /미성년자 출력하기

const isOld = 18;

if (isOld >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}

// quiz2. 숫자를 입력하면 짝수인지 홀수인지 출력하기

const number = 3;

if (number % 2 === 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}

// quiz3. 사용자 점수에 따라 등급(A-F) 나누기

const score = 20;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score >= 50) {
    grade = "E";
} else {
    grade = "F";
}

console.log(grade);

// quiz4. 사용자 이름이 특정 이름인지 확인하고 인사 출력하기

const specialName = "dodo";
let inputName = "woori";

if (inputName === specialName) {
    console.log("혼저옵서예");
} else {
    console.log("넌 추방이다");
}

// quiz5. 입력한 수가 0보다 크면 "양수", 0이면 "0", 아니면 "음수" 출력하기

let inputNumber = -3;

if (inputNumber > 0) {
    console.log("양수");
} else if (inputNumber === 0) {
    console.log("0");
} else {
    console.log("음수");
}

// quiz.6 비밀번호가 일치하는지 검사하고 로그인 결과 출력하기

const realPw = "1234";
let inputPw = "5678";

if (inputPw === realPw) {
    console.log("로그인 성공");
} else {
    console.log("비밀번호가 틀렸습니다");
}

// quiz.7 세 개의 수 중 가장 큰 수 찾기

let a = 3;
let b = 4;
let c = 5;

if (a >= b && a >= c) {
    console.log("a가 큽니다.");
} else if (b >= a && b >= c) {
    console.log("b가 큽니다.");
} else {
    console.log("c가 큽니다.");
}

// quiz.8 주어진 숫자가 3의 배수인지 확인하기

let multiple = 12;

if (multiple % 3 === 0) {
    console.log("3의 배수입니다.");
} else {
    console.log("3의 배수가 아닙니다.");
}
