// 이 차의 이름은 'JEEP'이고, 가격은 7000천만원입니다.

class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    sayName() {
        return `이 차의 이름은 ${this.name}이고, 가격은 ${this.price}천만원입니다.`;
    }
}

const car1 = new Car("JEEP", 7000);
const car2 = new Car("지바겐", 10000);

console.log(car1.sayName());

// 너무 헷갈린다;
