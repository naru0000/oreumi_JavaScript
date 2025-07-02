// 총점, 평균, 최고점수

function calcScores(score) {
    const total = score.reduce((a, b) => a + b);
    const average = Math.trunc(total / score.length);
    const top = Math.max(...score);

    return [total, average, top];
}

const [total, average, top] = calcScores([100, 50, 25, 32, 70]);
console.log(`점수의 합계는 ${total}, 평균은 ${average}, 1등 점수는 ${top}`);
