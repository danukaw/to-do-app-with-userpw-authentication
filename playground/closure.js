var a = 10;
function outter() {

  var b =20;

  var inner = function() {
    console.log(a);
    console.log(b);
  }
  return inner;

}

var innerFunc = outter();

innerFunc();

// java scripts modular pattern
function createPerson() {

  var firstName = "Danuka";
  var lastName ="Wijetunge";

  var createdObj = {
    "getFirstName" : function () {
      return  firstName;
    },
    "getLastName" : function () {
      return  lastName;
    } ,
  };

  return createdObj;
}
var person = createPerson();

console.log(person.firstName);

//var i = 0

for(var i=0; i < 10 ; i ++) {
  (function (){
    var value = i;

    setTimeout(() => {
      console.log(value);
    }, 1000);
  })();
}

console.log('finished...');
