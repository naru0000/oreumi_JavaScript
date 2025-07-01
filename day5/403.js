// for... of
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

const str = "Hello";
console.log(str.length);

for (const spell of str) {
    console.log(spell);
}

console.clear();

//while

let i = 4;

while (i < 10) {
    console.log(i);
    i++;
}

console.log("while문이 끝났습니다.");

let j = 4;
do {
    console.log(j);
    j++;
} while (j < 3);

console.clear();

let k = 1; //1부터 2씩 증가하는 값을 찍으세요. 1,3,5,.. 10 이상이 되면 멈추기

while (k < 10) {
    if (k === 5) {
        k += 2; // 안넣어주면 무한 루프가 걸려버림
        continue;
    }

    console.log(k);
    k += 2;
}
