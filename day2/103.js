// if(조건식)

// 공백이 있는 문자열 > true
// 공백이 없는 문자열 > false

if (undefined) {
    console.log("true");
} else {
    console.log("false");
}

//삼항연산자(간단한 if문에서 많이 씀)

// 조건식 ? 참일 때 : 거짓일 때

null ? console.log("true") : console.log("false");

// 짝수 홀수 구분을 삼항연산자로 나타냈을 때

!5 % 2 === 0 ? console.log("짝수") : console.log("홀수");

// 90점 이상 합격 // 미만 불합격

// if문으로 작성시
const score = 90;

if (score >= 90) {
    console.log("합격");
} else {
    console.log("불합격");
}

// 삼항연산자로 작성시
score >= 90 ? console.log("합격") : console.log("불합격");

// 삼항연산자로 더 간단하게 작성시
console.log(score >= 90 ? "합격" : "불합격");

// 90점 이상 'A' / 70점 이상 'B' / 70 미만 '실패

if (score >= 90) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("fail");
}
