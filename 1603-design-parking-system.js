var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }


ParkingSystem.prototype.addCar = function(carType) {
if(carType === 1){
    if(this.big > 0){
        this.big--;
        return true;
    }else{
        return false;
    }
} else if(carType === 2){
    if(this.medium > 0){
        this.medium--;
        return true;
    }else{
        return false;
    }
} else{
        if(this.small > 0){
        this.small--;
        return true;
    } else{
        return false;
    } 
}
};




-------
class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType) {
    if (
      (carType == 1 && this.big == 0) ||
      (carType == 2 && this.medium == 0) ||
      (carType == 3 && this.small == 0)
    )
      return false;

    if (carType == 1) this.big--;
    if (carType == 2) this.medium--;
    if (carType == 3) this.small--;

    return true;
  }
}

