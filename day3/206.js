// 함수선언식

function sum(a, b) {
    return a + b;
}

console.log(sum(3, 4));

// 함수표현식

const evenCheck = function (number) {
    return number % 2 ? "홀수" : "짝수";
};

const sum2 = (a, b) => {
    return a + b;
};

console.log(evenCheck(3));

function getRandom(value) {
    return Math.floor(Math.random() * value + 1);
}

const getRandom = (value) => {
    return Math.floor(Math.random() * value + 1);
};
