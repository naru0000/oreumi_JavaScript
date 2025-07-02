/* user객체
name,age,pets(dog(이름,나이) parret (이름,나이)
sayHello 메서드 -> 'Hello, ${name}' */

const user = {
    name: "ghost",
    skills: ["fly", "swim"],
    age: 1000,
    pets: {
        dog: {
            name: "멍멍이",
            age: 3,
        },
        parret: {
            name: "패럿",
            age: 2,
        },
    },
    sayHello() {
        return `Hello, ${this.name}`;
    },
};

console.log(user.sayHello());

console.log(user.pets.dog.name);

delete user.pets;
console.log(user);

console.log(user.skills[1]);

//user mbti 키값을 추가하기
user.mbti = "INFJ";

//user -> age 삭제
delete user.age;

// user -> name 변경
user.name = "Irangi";

// 객체에 method를 추가하기

user.sayBye = () => {
    return `Good Bye ${user.name}`;
};

console.log(user.sayBye());

// method -> mySkiils() 나의 능력은 'fly', 'swim' 이야
// this 키워드 사용, function

user.mySkills = function () {
    return `나의 능력은 ${this.skills}이야`;
};

console.log(user.mySkills());
