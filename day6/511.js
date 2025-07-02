// 함수선언식 : sum

function sum(a, b) {
    return a + b;
}

console.log(`두 수의 합은 ${sum}입니다.`);

// 결과가 리턴 -> '두 수의 합은 8입니다'

// 함수표현식(fuction 키워드)

const sayHello = function (name) {
    return `hello ${name}`;
};

console.log(sayHello("Ghost")); // Hello Ghost가 출력

// 함수표현식(화살표함수)

const getBigNumber = (x) => Math.max(...x);

console.log(getBigNumber([3, 5, 10, 12])); //가장 큰수를 리턴하는 함수 -> '12가 가장 큰 수 입니다.'
