const arr = [10, 20, 30, 40, 50];

// find

const bigger20 = arr.find((x) => x >= 20);
const bigger30 = arr.findIndex((x) => x >= 30); //배열로 찾아내서 'n번째'를 찾아냄(find나 findIndex 둘 다 1개만 찾을 수 있고, 화살표를 썼을 때 return이 생략됨)

console.log(`20이상의 수는 ${bigger20}`);
console.log(`20이상의 수는 ${bigger30}`);

const bigger40 = arr.find(function (x) {
    return x >= 40;
});

console.log(`40이상의 수는 ${bigger40}`);

const numbers = [15, 20, 17, 3, 80];

const newBigger20 = numbers.filter((x) => x >= 20); // 1개 찾을땐 find,모든 걸 찾을 땐 filter

console.log(`20이상의 수는 ${newBigger20}`);

// numbers에서 홀수를 모두 찾아내시오.

const oddNumbers = numbers.filter(function (x) {
    return x % 2 === 1;
});

console.log(oddNumbers);

// 조건을 적용해서 새로운 배열로 반환
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);
