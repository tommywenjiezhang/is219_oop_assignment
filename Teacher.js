let Person = require('./Person')
class Teacher extends Person{
    constructor(name,email,subject) {
        super(name, email);
        this._subject = subject
    }

    get subject() {
        return this._subject;
    }
}

module.exports = Teacher;