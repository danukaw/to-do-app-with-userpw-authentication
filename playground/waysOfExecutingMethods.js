function foo(){
  console.log("Hello + ", this);

}

//foo(); // method calling method 1


var obj = { "prop":"this is refers to object"};

obj.foo = function () {
  console.log("Hello method call 2" , this);
};

obj.foo(); // method calling method 2

new foo(); // method calling method 3

          // method calling method 4

//exmple of Bicycle object

function Bycycle (calnder, gear, speed, tirepressure) {

  this.calnder = calnder;
  this.gear = gear;
  this.speed = speed;
  this.tirepressure = tirepressure;

  this.inflate = function () {
    this.tirepressure +=3;
    console.log("This is refers inside mthod ", this);
  }
}

var bycycle = new Bycycle(50,4,50,30);

console.log(bycycle);

bycycle.inflate();

console.log(bycycle);
