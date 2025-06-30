const numbers = [51, 20, 12, 5, 2];

//01 numbers의 절반값을 구하시오. (단, 정수로)

const halfNumbers = numbers.map((number) => number / 2);
console.log(halfNumbers);

//02 numbers에서 15미만인 숫자를 모두 구하시오 [12,5,2]
const under15 = numbers.filter((number) => number < 15);
console.log(under15);

//03 numbers에서 15보다 작은 첫 번째 수를 구하시오.
const under15First = numbers.find((number) => number < 15);
console.log(under15First);

//04 number2에서 전체적으로 '5'가 몇개있는지 구하시오.(다시 풀어볼 것)
const number2 = [153, 7, 55];

// 전개 연산자 썼을 때
const findNumber = [...number2.join("")].filter((num) => num === "5").length;
console.log(findNumber);

// split을 썼을 때
const findNumber2 = number2
    .join("")
    .split("")
    .filter((num) => num === "5").length;
console.log(findNumber2);

// 05 users에서 'd'자가 들어간 이름만 배열로 반환
const users = ["Daniel", "Don", "donald", "Micheal"];

const findUser = users.filter((x) => x.toLowerCase().includes("d"));
console.log(findUser);

// 06 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 준다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원이다. 정수n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총 얼마를 지불해야 하는지 return하도록 함수를 완성하라.

function yangKochi(n, k) {
    // 서비스 음료의 개수 * 음료가격
}

yangKochi(10, 3); // 양꼬치 10인분, 음료 3개
