let position = 0; // 박스 위치
const box = document.querySelector(".box");

// 키를 누를때마다 계속 발생(keydown)
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        position += 5;
        box.style.transform = `translate(${position}px)`;
    }
    if (e.key === "ArrowLeft") {
        position -= 5;
        box.style.transform = `translate(${position}px)`;
    }
});
