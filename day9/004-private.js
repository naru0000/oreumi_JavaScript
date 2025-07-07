class Robot {
    // 초기값 설정
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`삐빅- 저는 ${this.name}입니다.`);
    }

    move() {
        console.log(`${this.name}이 이동 중입니다.`);
    }
}

class PwRobot extends Robot {
    constructor(name, password) {
        super(name);
        this.password = password;
    }

    login(password) {
        if (password === this.password) {
            console.log(`${this.name} 접속 성공`);
        } else {
            console.log(`${this.name} 접속 실패`);
        }
    }
}

const pwRobot = new PwRobot("로봇캣", "1234");
pwRobot.introduce();
pwRobot.login("1234"); // 접속 성공

// 문제상황 : 외부에서 접근이 가능
pwRobot.password = "0000";
pwRobot.login("1234"); // 접속 실패

// 비공개 프로퍼티 방식

class SafeRobot extends Robot {
    #password; // 비공개 필드(해쉬태그)
    constructor(name, password) {
        super(name);
        this.#password = password;
    }

    login(password) {
        if (password === this.#password) {
            console.log(`${this.name} 접속 성공`);
        } else {
            console.log(`${this.name} 접속 실패`);
        }
    }

    // 필요한 경우에 간접 접근이 허용되지만, 이러면 일반 프로퍼티와 다를게 없기 때문에 협업시 공유 필요

    // password 확인
    get password() {
        return this.#password;
    }

    // password 수정
    set password(newPassword) {
        this.#password = newPassword;
    }
}

console.log("=====비공개 프로퍼티 사용=====");
const safeRobot = new SafeRobot("안전한 로봇", "1234");
console.log(safeRobot);
safeRobot.introduce();
safeRobot.login("1234");
// pwRobot.#password = "0000"; // 에러 발생!!!(비밀번호 못바꿈)
safeRobot.password = "0000";
console.log(safeRobot);
safeRobot.login("0000");

// 정리
// 1. #를 이용한 비공개 프로퍼티 사용 -> 직접 접근을 막기 위함
// 2. get,set을 사용해서 필요한 경우에만 간접 접근 허용
// 3. 사용자나 협업자가 혼동되지 않도록 주석, 설명 남기는 것이 중요하다.
