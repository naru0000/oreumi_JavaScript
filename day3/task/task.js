// 1. heights에서 ghost보다 키가 큰 사람이 몇명인지 출력하시오.

const heights = [150, 169, 185, 170];
const ghost = 167;

const heightPerson = heights.filter((x) => x > ghost);

console.log(`ghost보다 키가 큰 사람은 ${heightPerson.length}명입니다.`);

// 2. words중에서 단어에 l자가 들어있는 단어만 배열로 저장하시오.

const words = ["hello", "ghost", "apple", "grape", "Lemon"];

const specialWord = words.filter((x) => x.toLowerCase().includes("l"));
console.log(specialWord);
