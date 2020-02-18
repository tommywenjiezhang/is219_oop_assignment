const Shape = require('./Shape')

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this._width = w;
        this._height = h;
    }

    calculateArea() {
        return this._width * this._height;
    }
}


module.exports = Rectangle