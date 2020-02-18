const Circle = require('../Circle')
const Rectangle = require('../Rectangle')
const Triangle = require('../Triangle')
const Shape = require('../Shape')

describe('shape instance test', () => {
    test('shape instance test', () => {
    // square
    const square  = new Rectangle(2,2)
        expect(square instanceof Shape).toBeTruthy();
    const circle = new Circle(2)
        expect(circle instanceof Shape).toBeTruthy();
    const isocele  = new Triangle(3,4)
        expect(isocele instanceof Shape).toBeTruthy();

    })
})


describe('shape area calculation test', () => {
    test('shape area calculation test', () => {
        // square
        const square = new Rectangle(2, 2)
        expect(square.calculateArea()).toBe(4)
        const circle = new Circle(2)
        expect(circle.calculateArea()).toBeCloseTo(Math.PI*Math.pow(2,2))
        const isocele = new Triangle(3, 4)
        expect(isocele.calculateArea()).toBe(6)

    })
})