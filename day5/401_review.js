//filter로 짝수 추출
const arr = [1, 2, 3, 4, 5, 6];
const evenNum = arr.filter((x) => x % 2 === 0);

console.log(evenNum);

// map으로 각 요소의 제곱 요소 만들기

const arr2 = [1, 2, 3, 4];
const newArr = arr2.map((x) => x ** x);

console.log(newArr);

// sort 내림차순 정렬
const arr3 = [5, 2, 9, 1];

const sortDown = arr3.sort((a, b) => b - a);
console.log(sortDown);

// reduce로 모든 값의 합 구하기

const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((a, c) => a + c, 0);
console.log(sum);

// some으로 0보다 작은 값이 있는지 확인

const arr5 = [3, -1, 5, 7];
const zeroSmall = arr5.some((num) => num < 0);
console.log(zeroSmall);

// every로 모두 3보다 큰지 확인

const arr6 = [4, 5, 6];
const bigNum = arr6.every((num) => num > 3);
console.log(bigNum);

// forEach로 요소 출력
// Ghost는 친구들의 이름을 한 줄로 출력하고 싶음. names 배열의 모든 요소를 한 줄씩 출력하는 solution 함수를 완성하세요.

const users = ["Irangi", "Camel", "Shoopa", "Nuvis", "Liang", "Mui"];

function solution(names) {
    names.forEach(function (name) {
        console.log(name);
    });
}

solution(users);

//filter와 map 조합
//ghost는 60점 이상인 점수만 2배로 만들어 새로운 배열을 만들고 싶다. scores 배열에서 60점 이상인 값만 2배로 만들어 반환하는 solution 함수를 완성하세요.

function solution(scores) {
    return scores.filter((x) => x >= 60).map((x) => x * 2);
}

// filter로 모음 제거(이따 해볼것)
// 영어에선 a,e,i,o,u 다섯가지 알파벳을 모음으로 분류한다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution함수를 완성하라.

function solution(my_string) {
    return my_string
        .split("")
        .filter((x) => !"aeiou".includes(x))
        .join("");
}

console.log(solution("beautiful"));

// for문 기초 퀴즈

// for문을 사용해 1부터 5까지 출력하시오

for (let i = 1; i < 6; i++) {
    console.log(i);
}

// for문으로 1-10중 3의 배수만 배열에 담아 출력하세요.

let arr7 = [];

for (let i = 1; i < 11; i++) {
    if (i % 3 === 0) {
        arr7.push(i);
    }
}

console.log(arr7);
