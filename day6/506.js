const students = [
    { name: "Ghost", score: 85 },
    { name: "Camel", score: 92 },
    { name: "Mui", score: 78 },
];

// student data type => array
// 배열에 요소추가 메서드 -> 배열변수.push(추가할 값)
// 학생을 추가,name: 'Shoopa', score: 20

console.log(typeof students);
console.log(Array.isArray(students)); // array 인지 확인하는 정적메서드
students.push({ name: "Shoopa", score: 20 });
console.log(students);

const arr = [30, 40, 50, 60];
//filter를 이용해서 50점 이상인 값만 배열로 출력

const over50 = arr.filter((x) => x >= 50);
console.log(`50 이상인 값은, ${over50}`); // 백틱으로 하면 배열이 문자열로 나옴

// students 중에 score가 80점 이상인 요소를 배열로 추출

const over80 = students.filter((x) => x.score >= 80);
const over80names = over80.map((x) => x.name);
console.log(over80);
console.log(over80names);

// 배열 오름차순,내림차순 정렬

const numbers = [11, 2, 23, 1, 55];

numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);

// students 성적순으로 정렬(성적이 높은 사람이 첫번째에 오도록)
// 원본에 영향을 주는 걸 작업할때는 전개연산자로 원본 배열을 복사해서 사용
const highScores = [...students].sort((a, b) => b.score - a.score);
console.log(highScores);
console.log(students);

console.clear();

// 알파벳 정렬

const alphabets = ["banana", "Banana", "apple", "Zebra"];

alphabets.sort((a, b) => a.localeCompare(b));
console.log(alphabets);

alphabets.sort((b, a) => a.localeCompare(b));
console.log(alphabets);
