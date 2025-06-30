// for (초기화 ; 조건식; 증감식)

const users = ["Daniel", "Don", "donald", "Micheal"];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// 1 부터 10까지 더한 합을 구하는 코드

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// 1부터 20까지 출력 , 이후 짝수만 출력

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.clear();

// 구구단출력

for (let i = 2; i <= 9; i++) {
    console.log(`------${i}단-------`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
