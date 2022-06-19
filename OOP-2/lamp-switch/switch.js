class Switch{
    status
    lamp

    constructor(){
        this.status = false
    }
    connectToLamp(lamp){
        this.lamp = lamp
    }
    turnOn(){
        this.status = true
        this.lamp.turnOn()
    }
    turnOff(){
        this.status = false
        this.lamp.turnOff()

    }
}