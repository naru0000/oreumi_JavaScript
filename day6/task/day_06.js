// object 기초 퀴즈

// 1. 객체 person에서 name 속성의 값을 출력하세요.

const person1 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

console.log(person1.name);
console.log(person1["name"]);

// ---------------------------------------------------------------------

// 2. 객체 person에 height: 180 속성을 추가하세요.

const person2 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

person2.height = 180;

// ---------------------------------------------------------------------

// 3. 객체 person에서 age 속성을 삭제하세요.

const person3 = { name: "Ghost", age: 20 };

// 여기에 코드를 작성하세요

delete person3.age;

// ---------------------------------------------------------------------

// 4. 객체 person의 모든 속성(key) 이름을 배열로 출력하세요.

const person4 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

const personKey = Object.keys(person4);

// ---------------------------------------------------------------------

// 5. 객체 person의 모든 값(value)만 배열로 출력하세요.

const person5 = { name: "Ghost", age: 20 };

// 여기에 코드를 작성하세요

const personValue = Object.values(person5);

// ---------------------------------------------------------------------

// 6. for...in문으로 person의 모든 key와 value를 한 줄씩 출력하세요.

const person6 = { name: "Ghost", age: 20 };

for (const list in person6) {
    console.log("object:", list, person6[list]);
}

// 여기에 코드를 작성하세요

// ---------------------------------------------------------------------

// 7. person에 'age' 속성이 있는지 true/false로 출력하세요.

const person7 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

console.log("age" in person7);

// ---------------------------------------------------------------------

// 8. person 객체의 모든 값을 "이름:값" 형태의 문자열로 출력하세요.

const person8 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

console.log(person8);

const personAll = Object.entries(person8);

personAll.forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});

// foreEach는 key랑 value에 대괄호를 안쳐줘서 구조분해할당이 안됐어요..
// 값 뒤에 0과 1이 붙는 이상 현상이 있었습니다 ㅠㅠ

// for (let i = 0; i < personAll.length; i++) {
//     console.log(`${personAll[i][0]} : ${personAll[i][1]}`);
// }

// ---------------------------------------------------------------------

// 9. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요.

// 여기에 코드를 작성하세요

obj = {};

obj.name = "minsu";
obj["age"] = 30;

console.log(obj);

// ---------------------------------------------------------------------

// 10. 객체 person의 key 개수를 출력하세요.

const person9 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

console.log(Object.keys(person9).length);

// ---------------------------------------------------------------------

console.clear();

// object 실전 퀴즈

// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.

const newUser = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
// 여기에 코드를 작성하세요

const userName = newUser.map((x) => x.name);

// ---------------------------------------------------------------------

// 2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.

const user = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

const newUserList = { ...user };
newUserList.age = 30;

// ---------------------------------------------------------------------

// 3. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)

const newPerson = { name: "Ghost" };

// 여기에 코드를 작성하세요

newPerson["hobby"] = "soccer";

// ---------------------------------------------------------------------

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.

const obj1 = { a: 1 };
const obj2 = { b: 2 };
// 여기에 코드를 작성하세요

const finalObj = { ...obj1, ...obj2 };

// ---------------------------------------------------------------------

// 5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.

const person10 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요

const arr = Object.entries(person10).map(([x, y]) => `${x} : ${y}`);

// ---------------------------------------------------------------------

// 6. users 배열에서 나이가 20 이상인 사람만 추출하세요.

const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];
// 여기에 코드를 작성하세요

const userOld = users2.filter((x) => x.age >= 20);
console.log(userOld);

// ---------------------------------------------------------------------

// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.

const person11 = { name: "Ghost", hobby: "soccer" };
// 여기에 코드를 작성하세요

const personUpper = Object.entries(person11).reduce((a, b) => {
    a[b[0].toUpperCase()] = b[1].toUpperCase();
    return a;
}, {});

// 계속 풀수가 없어서 한계가 와서 구글링 하면서 찾았습니다..ㅠㅠ

// ---------------------------------------------------------------------

// 8. 중첩 객체에서 내부 값에 접근하세요. (person.info.email)

const person12 = { name: "Ghost", info: { email: "ghost@email.com" } };

// 여기에 코드를 작성하세요

console.log(person12.info.email);

// ---------------------------------------------------------------------

// 9. 객체의 모든 값이 숫자인지 true/false로 판별하세요.

const obj3 = { a: 1, b: 2, c: 3 };

// 여기에 코드를 작성하세요

const objBoolean = Object.values(obj3).every((x) => (x = typeof Number));
console.log(objBoolean);

// ---------------------------------------------------------------------

// 10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.

const users = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];

// 여기에 코드를 작성하세요

const userOlder = users.reduce((oldest, current) => {
    return oldest.age >= current.age ? oldest : current;
});

// 계속 풀수가 없어서 한계가 와서 구글링 하면서 찾았습니다..ㅠㅠ
