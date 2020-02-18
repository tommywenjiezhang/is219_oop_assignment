[![Build Status](https://travis-ci.org/tommywenjiezhang/is219_oop_assignment.svg?branch=master)](https://travis-ci.org/tommywenjiezhang/is219_oop_assignment)
[![Coverage Status](https://coveralls.io/repos/github/tommywenjiezhang/is219_oop_assignment/badge.svg?branch=master)](https://coveralls.io/github/tommywenjiezhang/is219_oop_assignment?branch=master)
<h1>OOP Concept Explained in Example</h1>
<p>This post shows several important javascript object oriented programing concepts in action. They are encapsulation, abstraction, inheritance, and polymorphism respectively.</p>

<h2>Encapsulation</h2>
<p>Encapsulation hides its internal state, or data from the outside. It prevents direct modification while allows read and write access to the internal state. For example, the car object has attributes model, numberOfWheels, brand .etc, but they are not accessible for outside. The internal state only can be changed by getter and setter as shown below. 
</p>

```javascript
class Car{
    constructor(model,numberOfWheels = 4, brand,horsePower= 1,weight=1) {
        this._model = model;
        this._numberOfWheels = numberOfWheels;
        this._brand = brand;
        this._horsePower = horsePower;
        this._weight = weight;
    }

    get model() {
        return this._model;
    }

    set model(name){
        this._model = name
    }

    ...

    const nissan_rogue = new Car('Rogue',4,'nissan',170,3464)
    //getter
    nissan_rogue.model //Rogue
    //setter
    nissan_rougue.model = 'Rogue xl'
```



<h2>Abstraction<h2>
<p>Abstraction is similar to Encapsulation. Abstraction hides the complexity from the outside. For example, you can accelerate the car by stepping on gas and deceleration car by stepping on brake. However, you might now know the exact mechanism of acceleration and deceleration. Hence, the complexity is hidden under the hoods. The code below demonstrates the use of abstraction in programming.
</p>

```javascript
class Car{
    ...
    accelerate (time) {
        let force = this._horsePower * 5252;
        let acceleration = force / this._weight;
        this._speed += acceleration * time;
        return this._speed;
    }

    decclerate(time){
        if(this._speed <=  0){
            this._speed = 0
            return this._speed;
        }
        let force = this._horsePower * 5252;
        let acceleration = force / this._weight;
        this._speed -= acceleration * time;
        return this._speed;
    }
    }

    const nissan_rogue = new Car('Rogue',4,'nissan',170,3464)
    nissan_rogue.accelerate(10) //2577
    
```

<h2>Inheritance</h2>
<p>Inheritance allows us to create relationships between classes. The child class can inherit method and property from its parent class, eliminating duplication in code. Parent  class usually has a ‘has a’ relationship with child, while child class has a ‘is a’ relationship with parent class. The example below shows use of inheritance.
</p>

```javascript
class Person{
    constructor(name,email) {
        this._name = name;
        this._email = email;
    }

    get name(){
        return this._name
    }

    get email(){
        return this._email;
    }
}
// Teacher is inherited from  person
class Teacher extends Person{
    constructor(name,email,subject) {
        super(name, email);
        this._subject = subject
    }

    get subject() {
        return this._subject;
    }
}

```
<h2>Polymorphism</h2>
<p>Polymorphism is an ability to substitute classes that have common functionality in sense of methods and data. In other words, it is an ability of multiple object types to implement the same functionality that can work in a different way but supports a common interface. Take shape for example, circle, triangle, and rectangle all have a common functionality: calculating area, but they have different  implementations.Polymorphism prevents duplicated functions created for each shape and allows each shape to exhibit different behaviors.</p>

```javascript
class Shape{
calculateArea(){
}
}

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


class Circle  extends Shape{
    constructor(radius){
        super()
        this._radius = radius;
    }

    calculateArea(){
        return Math.PI  * Math.pow(this._radius,2)
    }
}

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


function calculateDiffShape(shapes) {
    return shapes.reduce((sum, shape) => {
        if (shape instanceof Shape) {
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            return sum + shape.area()
        }
        throw Error('Bad argument shape.');
    }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];

console.log(calculateDiffShape(shapes));
```