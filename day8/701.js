function print() {
    console.log("3초후에 실행되는 print 함수");
}

//setTimeout : 내가 지정한 시간 이후에 매개변수로 들어온 함수를 실행하겠다.
print();
setTimeout(print, 3000);

console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);
console.log(3);

function sayHello(name) {
    console.log(`hello, ${name}`);
}

// setTimeout(() => {
//     sayHello("ghost");
// }, 3000);

setTimeout(sayHello, 3000, "Irangi");
