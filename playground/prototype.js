// creating object method 1

var person = {
  "firstName" : "danuka",
  "lastName" : "Wijetunge",
  "age" : 34
};

console.log(person.firstName);

// creating object method 2

function createPerson (firstname, lastName, age) {

  var personObj = {
    "firstName" : firstname,
    "lastName" : lastName,
    "age" : age
  }

  return personObj;
}

var person = createPerson ("Danuka", "Wijetunge", 12);

console.log("object creation method 2 : firtstName : " +person.firstName);

// creating object method 3

function Person (firstname, lastName, age) {
  this.firstname = firstname;
  this.lastname = lastName;
  this. age = age;
}

var person = new Person("Nimesha", "Wjewardhana", 34);

console.log("object creation method 3 : firtstName : " +person.firstname);
