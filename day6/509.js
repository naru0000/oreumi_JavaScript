const user = {
    name: "Ghost",
    age: 1000,
};

// 값을 가지고 있는가

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("mbti")); // false

//Object.hasOwn(object, key) 요즘엔 이걸 많이 사용

console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "mbti"));
