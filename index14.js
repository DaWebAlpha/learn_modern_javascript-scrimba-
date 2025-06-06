
//USE CLASS SYNTAX TO DEFINE CONSTRUCTOR FUNCTION
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//OR

class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet
    }
}
const zeus1 = new SpaceShuttle('Jupiter');
console.log(zeus1.targetPlanet);


function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);