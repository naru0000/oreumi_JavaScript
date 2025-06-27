const str = "123";
const num = 255;

console.log(num.toString());

const arr = ["a", "b", "c"];
console.log(arr.toString());

console.log(true.toString());

const user = {
    mbti: "INFJ",
};

console.log(user.toString()); // 객체타입을 문자열로 그대로 반환
console.log(JSON.stringify(user)); // json객체로 객체타입데이터를 문자열로 변환할 수 있다.

console.log(num.toString(16));

console.clear();

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

const hexColor = `${createHexValue()}`;

function getRandomHex() {
    return Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
}

function createHexValue() {
    return "#" + getRandomHex() + getRandomHex() + getRandomHex();
}

console.log(hexColor);

const num2 = 123.456789; // 소수점 2자리까지만 출력
const newNum = num2.toFixed(2); // 문자형으로 변경되기 때문에 주의해야함

console.log(newNum, typeof newNum, parseFloat(newNum));
