// Object.assign({}: target, 복제할객체,얕은복사)

const user = {
    name: "Ghost",
    age: 1000,
};
// 객체 복사
const newUser = Object.assign({}, user);
const newUser2 = { ...user }; // 전개연산자로 복사
user.mbti = "INFJ";

console.log(user, newUser);
console.log(user === newUser); //false

const obj = { name: "apple" };
obj.name = "Mango";
obj.age = 1000;
console.log(obj);

// console.log(JSON.stringify(user)); json객체로 객체타입데이터를 문자열로 변환할 수 있다.

console.clear();

const user2 = {
    name: "Ghost",
    age: 1000,
    pets: {
        dog: "Bobby",
        parret: "Cherry",
    },
};

const newUser3 = { ...user2 };
newUser3.age = 500;
console.log(user2, newUser3);
console.log(user2 === newUser3); // false

newUser3.pets.dog = "Bombi";
console.log(user2.pets.dog, newUser3.pets.dog);
console.log(user2.pets.dog === newUser3.pets.dog); // true

// 깊은복사 JSON 이용
console.log(user2);
const newUser4 = JSON.parse(JSON.stringify(user2));
console.log(typeof newUser4, newUser4);

newUser4.pets.parret = "Alpha";

console.log(user2.pets.parret, newUser4.pets.parret);
console.log(user2.pets.parret === newUser4.pets.parret); // false
