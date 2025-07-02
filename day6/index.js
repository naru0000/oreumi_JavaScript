import { user1, user2 } from "./datas/user.js";

const { name, age, skills } = user1;
console.log(name, age, skills);

// 스킬이 없을땐 스킬에 뉴스킬을 넣어서..지정..
const { name: newName, age: newAge, skills: newskills = "no skills" } = user2;
console.log(newName, newAge, newskills);
