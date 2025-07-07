// 재료를 넣으면, "OO 맛과 OO 맛이 난다!"는 문장을 출력하는 기능을 가진 클래스 만들기
// Sausage 클래스와 GrilledSausage 파생 클래스까지 모두 작성하기!
// 꼭 인스턴스를 만들어서 console.log()로 잘 만들어지는지 확인해보기!

// Sausage 클래스 만들기
// 매개변수 2개 → taste1, taste2
// eat() 메서드 → {taste1}와 {taste2} 맛이 난다!

// GrilledSausage 클래스 만들기
// Sausage 클래스를 상속받기
// eat() 메서드를 오버라이딩 → {taste1}와 {taste2} 맛이 난다! 불 맛도 난다!

// 부모 클래스
class Sausage {
    // 초기값 설정
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    eat() {
        console.log(`${this.taste1}과 ${this.taste2} 맛이 난다!`);
    }
}

class GrilledSausage extends Sausage {
    // 생략 가능
    constructor(taste1, taste2) {
        super(taste1, taste2);
        this.fire = "불 맛"; // 이건 내가 그냥 추가한 것 밑에 텍스트로 적어도 무방
    }

    eat() {
        console.log(`${this.taste1}과 ${this.taste2} 맛이 난다! ${this.fire}도 난다!`);
    }
}

//실행 예시

const sausage = new Sausage("소고기", "파");
sausage.eat();
// 소고기와 파 맛이 난다!

const grilled = new GrilledSausage("닭고기", "떡");
grilled.eat();
// 닭고기와 떡 맛이 난다! 불 맛도 난다!
