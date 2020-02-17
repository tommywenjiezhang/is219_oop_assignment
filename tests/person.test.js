const Teacher = require('../Teacher');
const Student = require('../Student');

describe('teacher initialization test', ()=> {
    test(
        'teacher initialization test',
        () => {
            const nancy = new Teacher('nancy','nancy@gmail.com','English')
            expect(nancy.email).toBe('nancy@gmail.com')
            expect(nancy.name).toBe('nancy')
            expect(nancy.subject).toBe('English')
        }
    )
})

describe('student initization test', ()=>{
    test('student initization test', ()=>{
        const john = new Student('John', 'john@gmail.com','English','A')
        expect(john.name).toBe('John')
        expect(john.email).toBe('john@gmail.com')
        expect(john.className).toBe('English')
        expect(john.grade).toBe('A')
    })
})