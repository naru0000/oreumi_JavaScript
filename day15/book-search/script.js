const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");

// TODO 1: 책 검색 함수 구현
async function searchBooks() {
    // 검색어 가져오기
    const inputValue = $searchInput.value;

    // 빈 검색어 확인

    if (inputValue.trim().length === 0) {
        alert("검색어를 입력해주세요");
        return;
    }

    // API 호출
    try {
        // fetch를 사용해서 API 호출하기
        // encodeURIComonent => 특수문자 방지
        const book = await fetch(`${BOOK_URL}?query=${encodeURIComponent(query)}&size=10`, {
            method: "GET",
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`,
            },
        });

        // 응답 상태 확인하기
        if (!book.ok) {
            throw new Error("목록 조회 실패");
        }

        // JSON 데이터로 변환하기

        const bookData = await book.json();

        // 결과가 없다면 '검색 결과가 없습니다.' 메시지 표시

        if (bookData.documents.length === 0) {
            $bookList.innerHTML = `<li>검색 결과가 없습니다.</li>`;
        }

        // 검색 결과를 화면에 표시하기
        renderBooks(bookData.documents);
    } catch (error) {
        // 에러 메시지 콘솔 및 화면에 표시하기
        console.error("오류 발생", error);
        alert("오류 발생");
    }
}

// TODO 2: 폼 제출 이벤트 처리
$searchForm.addEventListener("submit", (e) => {
    // 기본 동작 방지하기
    e.preventDefault();
    // 검색 함수 호출하기
    searchBooks();
});

// TODO 3: 책 목록 렌더링 함수
function renderBooks(books) {
    // 기존 내용 삭제
    $bookList.innerHTML = "";
    // 책 정보를 화면에 표시
    books.forEach((book) => {
        const bookItem = document.getElementById("li");
        bookItem.innerHTML = `
        <h3>${bookData.documents.title}</h3>
        <p>${bookData.documents.authors}</p>
        <p>${bookData.documents.thumbnail}</p>
        <div><img src = "${bookData.documents.publisher}"></img></div>
        <strong>${bookData.documents.price}</strong>
      `;

        $bookList.appendChild(bookItem);
    });
}

// 🔍 구현 힌트
/*
📚 API 요청 URL 만들기:
`${BOOK_URL}?query=${encodeURIComponent(query)}&size=10`

🔑 Authorization 헤더 설정:
{
  headers: {
    'Authorization': `KakaoAK ${REST_API_KEY}`
  }
}

📊 API 응답 데이터 구조:
{
  "documents": [
    {
      "title": "책 제목",
      "authors": ["저자1", "저자2"],
      "thumbnail": "이미지 URL",
      "publisher": "출판사",
      "price": 15000
    }
  ]
}
*/
