class Car{
    constructor(model,numberOfWheels = 4, brand,horsePower= 1,weight=1) {
        this._speed = 0;
        this._model = model;
        this._numberOfWheels = numberOfWheels;
        this._brand = brand;
        this._horsePower = horsePower;
        this._weight = weight;
    }

    get speed(){
        return this._speed;
    }

    get model() {
        return this._model;
    }

    set model(name){
        this._model = name
    }
    
    get numberOfWheels() {
        return this._numberOfWheels;
    }

    get brand() {
        return this._brand;
    }


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

    beep(){
        return 'Beep, Beep'
    }

}

module.exports = Car;




