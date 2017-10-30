function Bycycle (calnder, gear, speed, tirepressure) {

  this.calnder = calnder;
  this.gear = gear;
  this.speed = speed;
  this.tirepressure = tirepressure;

  this.inflate = function () {
    this.tirepressure +=3;
  }
  //console.log("This refers to ", this);
}

function Person(name) {
  this.name = name;
}

var bycycle1 = new Bycycle(50,4,200,30);
var bycycle2 = new Bycycle(50,4,200,33);
bycycle1.inflate();

var mick = new Person("Mick");
mick.inflate = bycycle1.inflate;

console.log(mick.inflate.call(bycycle2));

console.log(bycycle2);
