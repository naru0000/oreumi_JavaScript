const a = 3 > 5; // false
console.log(a, typeof a);

const b = 5;
console.log(typeof b);

const c = "5";
console.log(typeof c);

const d = undefined;
console.log(typeof d);

const e = null;
console.log(typeof e);

// typeof로 데이터타입을 확인 할 수 있다.

const f = 1 + "1"; // number + string = string(자동형변환)
console.log(`${f}는 ${typeof f}이다.`);

const g = 2 * "2"; // number * string = number(자동형변환)
console.log(`${g}는 ${typeof g}이다.`);

const number = "15";
const result = Number(number) + 3; // Number()를 사용하여 명시적형변환
console.log(result);

console.log(+number); // 형변환을 간단하게 쓰고 싶을 때

const baseFont = 16;
const targetFont = 24;
const emFont = targetFont / baseFont; // em 단위로 변환

console.log(`${targetFont}px은 ${baseFont}px의 ${emFont}em입니다.`);
