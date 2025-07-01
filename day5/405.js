const obj = {
    name: "ghost",
    age: 1000,
    sayHello() {
        return `Hello, ${this.name}`; //obj.name
    },
    sayBye: function () {
        return `Good Bye ${this.name}`; //obj.name
    },
    getAge: () => {
        return this.age; // 화살표함수안의 this는 obj를 가리키지 않는다. 주의.
    },
};

console.log(obj.sayHello());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
    age: 1000,
    mbti: "INFJ",
    say: function () {
        console.log("say Hello");
    },
};

console.log(ghost.age, ghost.mbti); // 접근방법, 값을 가져오는 방법
ghost.age = 500; // 수정방법

console.log(ghost);

const type = "age";
console.log(ghost[type]); //키값이 변수값으로 들어오면 []로 막아줘야 한다.

ghost.say();
