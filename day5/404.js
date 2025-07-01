let friends = ["Irangi", "Shoopa"];

function isValidName(name) {
    const index = friends.indexOf(name);
    if (index === -1) {
        console.log(`${name}은 친구가 아닙니다.`);
        return false;
    }
    return index;
}

function addFriend(name) {
    // 중복 체크: 이미 친구면 추가 안 함
    const index = isValidName(name);
    if (index !== false) {
        console.log(`${name}은 이미 친구입니다.`);
        return;
    }
    friends.push(name);
    console.log(`${name}님이 친구로 추가되었습니다.`);
}

function deleteFriend(name) {
    // 유효성 검사
    const index = isValidName(name);
    if (index === false) return;

    friends.splice(index, 1);
    console.log(`${name}님을 친구 목록에서 삭제했습니다.`);
}

function updateFriend(name, newName) {
    // 유효성 검사
    const index = isValidName(name);
    if (index === false) return;

    // 빈 문자열 체크
    if (newName === "") {
        console.log(`새 이름을 입력해주세요.`);
        return;
    }

    friends[index] = newName;
    console.log(`${name}님을 ${newName}님으로 이름을 변경했습니다.`);
}
