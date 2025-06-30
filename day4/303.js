// reduce()
// (accumalator, currentValue)
const numbers = [1, 2, 3, 4, 5];

// a - 누적값을 저장, c라는 요소가 각 변수에 한번씩 접근함
// 0은 생략 가능함(초기값을 지정)
// 마지막 누적값인 15가 나옴
const total = numbers.reduce((a, c) => a + c, 0);

console.log(total);

console.clear();

const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
// 홀수번째 인덱스값만 더한 결과를 출력하시오.

const total2 = numbers2.filter((x, index) => index % 2 === 1).reduce((a, c) => a + c, 0);
console.log(total2);

// 1부터 10까지 배열에 들어갔음 함
const arr = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

console.log(arr);

function sumNumbers(number) {
    const numberArray = Array(number)
        .fill(0)
        .map((_, i) => i + 1);
    const result = numberArray.reduce((a, c) => a + c, 0);

    console.log(result);
    return result;
}

sumNumbers(100); // 1-100까지 더하기한 합이 출력
sumNumbers(50); // 1-50까지 더하기한 값
