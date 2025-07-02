/**
 * 'key' in 객체
 * 해당 key가 객체에 있는지 존재여부를 Boolean으로 출력
 */

const user = {
    name: "Ghost",
    age: 1000,
    skills: "fly",
};

console.log("name" in user); // name이 user에 있는지
console.log("color" in user); // color가 user에 있는지
console.log("skills" in user); // skills가 user에 있는지

const arr = ["a", "b", "c"];

// for..in 객체를 순회하면 key값을 출력한다.(배열에서는 index값을 출력하며,잘 사용 X)
// key값을 검색

// idx,key는 변수의 이름
for (const idx in arr) {
    console.log("array :", idx);
}

for (const key in user) {
    console.log("object:", key, user[key]);
}

for (const test in user) {
    console.log("object:", test, user[test]);
}

const person = {
    name: "Ghost",
    age: 20,
};

console.clear();

// age 삭제
// delete person.age;

for (const key in person) {
    console.log(key);
}
