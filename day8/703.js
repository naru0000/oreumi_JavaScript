// 1초에 한번씩 hello 찍기

// setInterval(() => {
//     console.log("hello", 1000);
// });

// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleString());

// 현재시각 3초에 한번씩 시간보여주기

// setTimeout(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 3000);

// 0.5초마다 카운트 증가(시간 지정할때 위치 조심할것)

// let count = 0;
// setInterval(() => {
//     console.log(`Count : ${count++}`);
// }, 500);

const news = ["코딩수업 마지막날", "Javascript 최고", "그동안 즐거웠다"];

// let index = 0;

// setInterval(() => {
//     console.log(news[index]); // 배열의 순서 출력
//     index++; //인덱스넘버
//     if (index >= news.length) {
//         //인덱스넘버가 배열 인덱스 갯수 이상되면
//         index = 0; // 인덱스넘버는 0으로
//     }
// }, 1000);

// 1초에 한번씩 Hello가 찍히다가, 3초 후에 멈추기

// let index = 0;

// setInterval(() => {
//     console.log(news[index]);
//     index++;
//     if (index >= news.length) {
//         index = 0;
//     }
//
// }, 1000);

// const printHello = setInterval(() => console.log("Hello"), 1000);
// setTimeout(clearInterval, 3000, printHello);

// 1초마다 1-5까지 출력한 후에 멈추기 -> count 변수 감시...

// 1초마다 1-5까지 출력하기

let count = 1;

const interval = setInterval(() => {
    console.log(count);
    count++;
    if (count > 5) {
        count = 1;
    }
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 6000);
