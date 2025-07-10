const obj = {
    name: "test",
    method() {
        console.log(this); // ① obj 객체

        function inner() {
            console.log(this); // ② window(전역 객체)
        }
        inner();

        const arrow = () => {
            console.log(this); // ③ obj 객체(상위 스코프의 this)
        };
        arrow();
    },
};
obj.method();

const wenivInfo = `{
  "company": "위니브",
  "members": [
    {
      "name": "이호준",
      "nickname": "Licat",
      "job": "CEO"
    },
    {
      "name": "김유진",
      "nickname": "Binky",
      "job": "프론트엔드"
    },
    {
      "name": "전유진",
      "nickname": "Zeze",
      "job": "프론트엔드"
    },
    {
      "name": "차경림",
      "nickname": "Soulgom",
      "job": "디자인"
    }
  ]
}
`;
