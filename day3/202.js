const str = "hello world";
console.log(str.length); // 띄어쓰기 포함해서 11글자가 나옴

console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));

// includes(문자가 포함되어있는지 판별해서 true,false로 나옴)

let str2 = "Hello World!";
console.log(str2.includes("o"));
console.log(str2.includes("a"));

console.clear();

// ghost만 출력하기(slice)
const email = "ghost@gmail.com";
const userName = email.slice(0, 5);
console.log(userName);

// email에서 @ 의 문자열 위치 찾기(indexOf)

const userEmail = email.indexOf("@");
console.log(userEmail);

const str3 = "Hello World!";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

console.clear();

const str4 = "A.B.C";
const nesStr = str4.split(".");
console.log(nesStr);

// 사용자이메일에서 도메인만 출력하기 -> gmail.com

const domain = email.split("@")[1];
console.log(domain);

// 각 URL의 접근페이지명을 출력하시오

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

console.log(url1.split("/").at(-1));
console.log(url2.split("/").at(-1));

console.clear();

const str5 = "      hello       world       ";
console.log(str5.trimStart(), "-"); // 앞쪽의 공백 모두 제거
console.log(str5.trimEnd(), "-"); // 뒤쪽의 공백 모두 제거
console.log(str5.trim(), "-"); // 양쪽의 공백 모두 제거

const star = "*";
console.log(star.repeat(5));

let str6 = "Hello World!";
console.log(str6.replace("World", "Weniv"), str6); //바뀐 값을 보여주긴 하는데 원본 자체를 바꾸진 않음
console.log(str6.replaceAll("o", "a"));

const num = "7";
const num2 = "27";
console.log(num.padStart(3, "0")); //3자리로 나타낼건데, 앞이 비었다면 0으로 채울것
console.log(num2.padStart(3, "0"));

console.log(num.padEnd(3, "!")); //3자리로 나타낼건데, 뒤가 비었다면 !로 채울 것

// 천원 단위로 금액을 입력받았을 때
const coin = "3200"; // 320만원이 되어야 할 때
const cost = "1000";
console.log(coin.padEnd(7, "0"));

// coin 입력, cost 뺀 나머지 금액만 지원받을 수 있을 때 최종 지원금액은 얼마인가?
console.log(`${(Number(coin) - Number(cost)) * 1000}`);
