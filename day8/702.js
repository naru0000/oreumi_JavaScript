// 자바스크립트 함수는 아니고 웹 api 함수이다.
// 몇초에 한번 반복하겠다.

function sayHello(name) {
    console.log(`Hello ${name}`);
}

const timerId = setInterval(sayHello, 1000, "Ghost"); //안멈추고 1초마다 나옴;

clearInterval(timerId); // 취소

function sayBye(name) {
    console.log(`Good-bye, ${name}`);
}

const timer = setTimeout(sayBye, 3000, "woori");

clearTimeout(timer); // 취소
