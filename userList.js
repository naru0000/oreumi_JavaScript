// 성별 평균 나이 계산하기
// 당신은 이제 인사팀 직원이 되었습니다. 아래 userData 목록을 보고, 각 성별(gender)의 평균 나이를 계산해서 객체 형태로 보고해야 합니다.
// 주어진 userData 문자열을 자바스크립트 배열로 변환하세요.
// 배열을 순회하며, 성별(gender)을 key로, 해당 성별의 평균 나이를 value로 갖는 새로운 객체를 만드세요.
// 평균 나이는 정수로 표현하기 위해 소수점 이하는 버립니다. (Math.floor() 사용)
// 최종적으로 완성된 객체를 console.log로 출력하세요.

// 이런 형태로 출력되어야 합니다.
// {
//   female: 27,
//   male: 31
// }

const userData =
    '[{"_id":"5e80777f673acf89c007ff91","age":27,"eyeColor":"green","name":"Angelina Chang","gender":"female","email":"angelinachang@kangle.com","phone":"+1 (938) 477-2821"},{"_id":"5e80777feee717674b817fd2","age":25,"eyeColor":"green","name":"Deidre Cobb","gender":"female","email":"deidrecobb@kangle.com","phone":"+1 (938) 477-2824"},{"_id":"5e80777fac368a4578dda85d","age":25,"eyeColor":"blue","name":"Jolene Franks","gender":"female","email":"jolenefranks@kangle.com","phone":"+1 (985) 536-3981"},{"_id":"5e80777ff3717874cbc78e44","age":31,"eyeColor":"brown","name":"Waters Hardin","gender":"male","email":"watershardin@kangle.com","phone":"+1 (938) 559-2224"},{"_id":"5e80777fe36842ea9e024fcd","age":34,"eyeColor":"green","name":"Jody Chaney","gender":"female","email":"jodychaney@kangle.com","phone":"+1 (878) 587-2602"},{"_id":"5e80777fafd591f57344eb33","age":31,"eyeColor":"green","name":"Ortiz Maldonado","gender":"male","email":"ortizmaldonado@kangle.com","phone":"+1 (986) 509-2753"},{"_id":"5e80777f20e48e9ada226862","age":25,"eyeColor":"brown","name":"Stacy Burris","gender":"female","email":"stacyburris@kangle.com","phone":"+1 (864) 577-3500"},{"_id":"5e80777faf334f84a2c90595","age":33,"eyeColor":"brown","name":"Davenport Levy","gender":"male","email":"davenportlevy@kangle.com","phone":"+1 (990) 600-2700"}]';

const userList = JSON.parse(userData);

const parsedUser = {};

userList.forEach((user) => {
    const gender = user.gender;
    const age = user.age;

    if (!parsedUser[gender]) {
        parsedUser[gender] = { totalAge: 0, count: 0 };
    }

    parsedUser[gender].totalAge += age;
    parsedUser[gender].count += 1;
});

const finalAver = {};

for (const gender in parsedUser) {
    const total = parsedUser[gender].totalAge;
    const count = parsedUser[gender].count;
    finalAver[gender] = Math.floor(total / count);
}

console.log(finalAver);
