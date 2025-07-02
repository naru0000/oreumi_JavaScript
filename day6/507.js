const users = [
    { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
    { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
    { nickName: "Camel", role: "user", email: "camel@kakao.com" },
    { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
    { nickName: "Mui", role: "user", email: "mui@naver.com" },
];

//user에서 admin 권한을 가진 요소출력,
//사용자의 이름을 출력
//사용자의 이름은 알파벳순으로 정렬해서 배열로 반환
//admin 권한 -> superAdmin, admin

//['Ghost','Irangi']

const userAdmin = users
    .filter((x) => x.role.toLowerCase().includes("admin"))
    .map((x) => x.nickName)
    .sort((a, b) => a.localeCompare(b));

console.log(userAdmin);

// users에서 일반유저가 몇명인지 출력. -> 일반 유저는 총 3명입니다
const basicUser = users.filter((x) => x.role.includes("user")).length;
// const basicUser = users.filter((x) => x.role === "user").length; // 간단 방법

console.log(basicUser);

// newUsers 배열에서 모든 사용자의 이름만 배열로 추출

const newUsers = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];

const userName = newUsers.map((x) => x.name);
console.log(userName);

const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

const tagList = posts
    .map((x) => x.tags)
    .flat(1) // 배열 하나로 쫙 펼쳐줌
    .join(", ");
// const tagList = posts.map((x) => x.tags).flat(1).toString;
console.log(tagList);
