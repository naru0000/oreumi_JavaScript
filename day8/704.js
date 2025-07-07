const cat = {
    name: "kitty",
    sound: function () {
        console.log("야옹");
    },
};

cat.sound();
const dog = {
    name: "star",
    sound: function () {
        console.log("멍멍");
    },
};

dog.sound();

// 생성자함수(구분하려고 함수명을 대문자로 앞에 적음)

function Animal(name) {
    this.name = name; // 오른쪽 name은 매개변수 name
    this.sound = function () {
        console.log(`${this.name} 소리가 납니다.`);
    };
}

// new라는 키워드 뒤에 함수를 붙이면 생성자함수가 됨
// new Date()를 기억하면 됨
// 생성자함수에서는 화살표 함수 쓰면 안됨

const tiger = new Animal(`야옹`);
const parret = new Animal("짹짹");

tiger.sound();
parret.sound();

// Class
class Animal2 {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} 소리가 납니다.`);
    }
}

const lion = new Animal2("king~~~~");
lion.sound();

function Friends(name, age) {
    // 무조건 쓴다고 생각하면 됨 초기화
    this.name = name; // 오른쪽 name은 매개변수 name
    this.age = age;

    this.sayHello = function () {
        console.log(`${this.name}은 ${this.age}입니다.`);
    };
}

const ghost = new Friends("Ghost", 1000);
console.log(ghost);
ghost.sayHello();

// class

class Friends2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello2() {
        console.log(`${this.name}은 ${this.age}입니다.`);
    }
}

const user1 = new Friends2("Irangi", 500);

console.log(user1);
