let Person = require('./Person')

class Student extends Person{
    constructor(name, email,className,grade) {
        super(name,email)
        this._className = className
        this._grade = grade;
    }


    get grade() {
        return this._grade;
    }

    get className() {
        return this._className;
    }
}

module.exports = Student;