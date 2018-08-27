// object based inheritance
var emp = {name:"sfs",displayName:function(){console.log(this.name);}};
var emp2 = Object.create(emp,{name2:{value:"rang"}});

emp.name="neetu";var emp3 = emp;
console.log(emp2);
emp3;

//type based inheritance - super types using prototype and constructor type using Object.call(obj);
function Person(name, age){
    this.name=name;
    this.age=age;
} 
function Emp(cmp){
    this.comp =cmp;
}
Emp.prototype = new Person("nee",1);

var obj = {};
Person.call(obj);

// prevent object from modification in es6 on strict mode- preventExtension, seal, freeze

var employee = {
	name: "Nishant"
};

// lock the object 
Object.preventExtensions(employee);
// Seal the object 
Object.seal(employee);
//Freeze the object
Object.freeze(employee); 