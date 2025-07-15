// DOM트리에는 존재하지 않고 메모리상태만 존재하는 DOM 노드(가짜 DOM)

const itemList = document.getElementById("item-list");

// 메모리 상에만 존재하는 가짜 DOM 만들기
const docFrag = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.textContent = `item ${i}`;
    // itemList.appendChild(li);
    docFrag.appendChild(li);
}

// 마지막에 한 번만 실제 DOM 추가

itemList.appendChild(docFrag);

// 리스트가 많아질수록 내부 컨텐츠가 복잡해질수록 성능 차이가 체감된다
// 가상 메모리는 금방 휘발
