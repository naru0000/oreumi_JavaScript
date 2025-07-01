const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 역순
for (let i = 10; i > 0; i--) {
    console.log(i);
}

const nums = [1, 2, 3, 4, 5];
//3이라면 찍지 말기

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) continue; //for문 종료(break), 요소 제외하고 계속(continue)
    console.log(nums[i]);
}

console.clear();

let result = [];
//for문을 이용해서 nums의 배열요소를 모두 result로 넣을건데, 홀수번째만 넣기
//result = [1,3,5]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) continue;
    result.push(nums[i]);
    console.log(result);
}
