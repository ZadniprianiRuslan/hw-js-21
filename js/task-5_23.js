class Car {
  static getSpecs(car) {
    return car;
  }

  constructor({ maxSpeed, speed, isOn, distance, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }

  turnOn() {
    if ((this.isOn = true)) {
      return this.speed;
    }
    // return (this.isOn = true);
  }

  turnOff() {
    if ((this.isOn = false)) {
      return (this.speed = 0);
    }
    // return (this.isOn = false);
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      return this.speed;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      return this.speed;
    }
  }

  drive(hours) {
    if ((this.isOn = true)) {
      return hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
console.log(Car.getSpecs(mustang));
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
console.log(Car.getSpecs(mustang));
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
