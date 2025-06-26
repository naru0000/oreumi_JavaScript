// 논리연산자

// and -> && (모든값이 true일 때만 true 반환)

console.log(true && true);
console.log(true && false);
console.log(false && false);

//  or -> || (하나라도 값이 true 이면 true 반환)

console.log(true || true);
console.log(true || false);
console.log(false || false);

// not

console.log(!true);
console.log(!false);
console.log(!!false); // 원래값으로 돌아옴

// ko = 100, en = 80, math = 50
// 평균이 70점 이상이면 합격, 단 한과목이라도 60점 미만이면 불합격

let ko = 100;
let en = 80;
let math = 50;
let average = (ko + en + math) / 3;

if (average >= 70 && ko > 60 && en > 60 && math > 60) {
    console.log("합격");
} else {
    console.log("불합격");
}
