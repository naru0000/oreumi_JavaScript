// Object.keys(obj)
// 객체의 키를 배열로 반환

const person = {
    name: "Ghost",
    age: 1000,
    mbti: "INFJ",
};

// 배열로 변환됨
console.log(Object.keys(person)); // key 만
console.log(Object.values(person)); // value 만

// Object.entries(obj)
// 객체의 키,값을 배열로 반환

console.log(Object.entries(person)); // [키,값][키,값]

const user = {
    name: "woori",
    age: 3000,
    mbti: "INFP",
};

console.clear();

// 유저의 키,값,[키,값]

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// 객체를 쓰는 일보다 객체를 배열로 변환해서 쓰는 일이 많다
