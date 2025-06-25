const baseFont = 16;
const targetFont = 24;
const emFont = targetFont / baseFont; // em 단위로 변환

console.log(`${targetFont}px은 ${baseFont}px의 ${emFont}em입니다.`);

function pxToEm(target) {
    const em = target / 16; // em 단위로 변환
    console.log(`${target}px -> ${em}em`);
}

pxToEm(24);
pxToEm(30);
pxToEm(40);
