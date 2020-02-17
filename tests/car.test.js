const Car = require('../Car');


describe('car class initialization', ()=>{
    test('car class initialization', ()=>{
        const nissan_rogue = new Car('Rogue',4,'nissan',170,3464)
        expect(nissan_rogue._model).toBe('Rogue');
        expect(nissan_rogue._numberOfWheels).toBe(4);
        expect(nissan_rogue._brand).toBe('nissan');
    })
})

describe('car accleration test', () =>{
    test('car accleration test', () => {
        const ferrati_gt_california = new Car('GT California', 4, 'Ferrati',483,2300)
        let testForce = 483 * 5252
        let testAccleration = testForce/2300
        let testSpeed = ferrati_gt_california._speed  + testAccleration*1
        expect(ferrati_gt_california.accelerate(1)).toBe(testSpeed)
    })
})

describe('car deccleration test', () =>{
    test('car daccleration test', () => {
        const ferrati_gt_california = new Car('GT California', 4, 'Ferrati',483,2300)
        let testForce = 483 * 5252
        let testAccleration = testForce/2300
        ferrati_gt_california.accelerate(2)
        let testSpeed = ferrati_gt_california._speed  - testAccleration*1
        expect(ferrati_gt_california.decclerate(1)).toBe(testSpeed)
    })
})
