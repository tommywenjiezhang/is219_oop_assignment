const Shape = require('./Shape')

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b;
        this.height = h;
    }

    calculateArea() {
        return this.base * this.height / 2;
    }
}

module.exports = Triangle;