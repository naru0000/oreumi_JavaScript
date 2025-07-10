// 주어진 bookList 문자열을 자바스크립트 배열로 변환하세요.
// 배열을 순회하면서, 각 책의 장르(genre) 를 key로 하는 새로운 객체를 만드세요.
// 해당 key의 value는 그 장르에 속하는 책들의 제목(title) 이 담긴 배열이어야 합니다.
// 최종적으로 완성된 객체를 console.log로 출력하세요.

// 이런 형태로 출력되어야 합니다.
// {
//   Novel: [ 'The Great Gatsby', 'To Kill a Mockingbird', 'The Catcher in the Rye' ],
//   Dystopian: [ '1984' ],
//   Romance: [ 'Pride and Prejudice' ]
// }

const bookList =
    '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';
