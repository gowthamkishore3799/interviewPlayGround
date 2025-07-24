class ParkingSystem {
    parkingSpaces;
    constructor(big: number, medium: number, small: number) {
        this.parkingSpaces = new Map();
        this.parkingSpaces.set(1, big);
        this.parkingSpaces.set(2, medium);
        this.parkingSpaces.set(3, small);
    }

    addCar(carType: number): boolean {

        let freeParkingSpaces = this.parkingSpaces.get(carType);

        if(freeParkingSpaces <=0){
            return false;
        }

        this.parkingSpaces.set(carType, freeParkingSpaces-1)

        return true;
    }
}
