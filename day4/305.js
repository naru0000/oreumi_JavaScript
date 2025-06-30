// HTTP -> 200, 404, 500, 알수없는 에러

const statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("성공입니다.");
        break;
    case 404:
        console.log("페이지를 찾을 수 없습니다.");
        break;
    case 500:
        console.log("서버 오류입니다.");
        break;
    default:
        console.log("알수 없는 오류입니다.");
}

// 유저의 Role을 판단해서 출력하는 구문을 만드시오
// admin -> '관리자님 안녕하세요', user -> '회원님 안녕하세요', guest -> '게스트 화면입니다' 그 외의 경우에는 '페이지를 보는 권한이 없습니다'

console.clear();

const userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("관리자님 안녕하세요");
        break;
    case "user":
        console.log("회원님 안녕하세요");
        break;
    case "guest":
        console.log("게스트 화면입니다.");
        break;
    default:
        console.log("페이지를 보는 권한이 없습니다");
}

// Date 객체
const today = new Date(); //2025-06-30T04:26:07.502Z

console.log(today.toISOString().split("T")[0]);

const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const date = today.getDate().toString().padStart(2, "0");
const day = today.getDay();

console.log(`${year}-${month}-${date}, ${day}`);

//day와 switch문을 이용해서 오늘의 요일을 문자열로 출력하시오. 'Sunday','Monday',..

console.clear();

let week = new Date().getDay();

switch (week) {
    case 0:
        console.log("일요일입니다.");
        break;
    case 1:
        console.log("월요일입니다.");
        break;
    case 2:
        console.log("화요일입니다.");
        break;
    case 3:
        console.log("수요일입니다.");
        break;
    case 4:
        console.log("목요일입니다.");
        break;
    case 5:
        console.log("금요일입니다.");
        break;
    case 6:
        console.log("토요일입니다.");
        break;
    default:
        console.log("잘못된 요일입니다.");
}

const hours = today.getHours();
const minutes = today.getMinutes();

// 14:08 pm 삼항연산자 of if

const amPm = hours >= 12 ? "PM" : "AM";

// 2:8 PM

// 02:08 pm

const hours12 = String(hours % 12 || 12).padStart(2, "0");

console.log(`${hours}:${minutes}`); //24시간제
console.log(`${hours12}:${minutes} ${amPm}`); //12시간제
