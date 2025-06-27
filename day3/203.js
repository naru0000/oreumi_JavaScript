// isNumber : ture or false

const num = "123";
const num2 = 123;
const num3 = "hello";

console.log(isNaN(num)); //false - 숫자이다.
console.log(isNaN(num2)); // false - 숫자이다.
console.log(isNaN(num3)); // true - 숫자가 아니다.

console.log(Number.isNaN(num));
console.log(Number.isNaN(num2));
console.log(Number.isNaN(num3)); // false (NaN)

console.clear();

const str = "I like apple pie.";

console.log(str.includes("apple"));
console.log(str.at(4));
console.log(str.indexOf("p"));
console.log(str.lastIndexOf("p"));
console.log(str.split(" "));
console.log(str.slice(7, 12));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str2 = "  Hello   World   ";

console.log(str2.trim());
console.log(str2.replace("World", "Ghost"));
console.log(str2.split("World")[0].trim().repeat(3));
console.log(str2.replaceAll("o", "-"));

const num4 = "7";

console.log(num4.padStart(3, "0"));

const a = "hello";
const b = "world";

const c = a + " " + b;

console.log(c);
