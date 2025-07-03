const users = [
    { name: "ghost", age: 1000 },
    { name: "irangi", age: 500 },
    { name: "nuvis", age: 30 },
];

//users객체를 JSON을 이용하여 문자열로 출력하시오.

// 객체 > 문자열
const stringUsers = JSON.stringify(users);

// 문자열 > 객체
const objectUsers = JSON.parse(stringUsers);

console.log(objectUsers, typeof objectUsers);
