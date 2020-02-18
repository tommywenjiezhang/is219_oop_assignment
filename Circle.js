const Shape = require('./Shape')


class Circle  extends Shape{
    constructor(radius){
        super()
        this._radius = radius;
    }

    calculateArea(){
        return Math.PI  * Math.pow(this._radius,2)
    }
}

module.exports = Circle;