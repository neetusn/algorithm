Object.keys();
Object.values();
Object.assign();
Object.create();
Object.entries();
Object.apply();
Object.call();
Object.bind();
// ******* ASSIGN
const object1 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const object2 = Object.assign({c: 4, d: 5}, object1);
  
  console.log(object2.c, object2.d);
  // expected output: 3 5

// ********* CREATE
  var person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  var me = Object.create(person);
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

// *******OBJECT.ENTIRES
const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)[1]);
// expected output: Array ["baz", 42]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)[2]);
// expected output: Array ["2", "c"]

const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
// expected output: Array ["2", "b"]
  
// ******Object.toString()
function Dog(name) {
    this.name = name;
  }
  
  dog1 = new Dog('Gabby');
  /*
  Dog.prototype.toString = function dogToString() {
    return this.name;
  }*/
  
  console.log(dog1.toString());
  // expected output: "Gabby"

//   *****Object.values()

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

//   ******Object.keys()

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]
  