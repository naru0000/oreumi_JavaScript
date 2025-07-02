// 구조분해할당(Destructuring)

const animals = ["puppy", "cat", "parret", "lion", "tiger", "duck", "panda"];

// const [a, , c] = animals; 콤마를 찍어주면 생략가능
const [a, b, ...rest] = animals; //나머지 배열 지칭 가능

console.log(rest);

const numbers = [1, 2, 3, 4, 5];
// animals,nubmers 합친 새로운 배열을 만드세요
const newArray = [...animals, ...numbers];

console.log(newArray);

const array2 = ["apple", "mango", "banana"];

//변수 - a,b,c

const [x, y, z] = array2;
console.log(x);
console.log(y);
console.log(z);

//함수
function calc(a, b) {
    return [a + b, a / b, a * b];
}

const array = calc(10, 2);
console.log(array); // return을 배열로 했으니까 값도 배열로 출력됨

const [sum, div, multiply = "No multiply", diff] = calc(15, 3);
console.log(sum, div, multiply, diff);
