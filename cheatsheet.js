// Sets an immutable object
const name = 2
// A string literal incorporating the name variable
console.log(`Hey there ${name}`);
// Finding the data type of name
console.log(typeof name)
// Finding the inheritanve prototype for the name variable
console.log(name.__proto__)
// Creates a new object called car
const car = new Object()
console.log(car)
console.log(car.__proto__)
// Also creates a new object, this time called cars
const cars = {}
console.log(cars)
console.log(cars.__proto__)
// Creates a new array called cat
const cat = new Array()
console.log(cat)
console.log(cat.__proto__)
// Also creates a new array, this time called cats
const cats = []
console.log(cats)
console.log(cats.__proto__)


// Classes
// Creates a class called Dog
class Dog {
    // The constructor method
    constructor(name) {
        // The name value of this object (when initialised) will be set by the argument passed in
        this.name = name
    }
    
    hello() {
        return `Hello I am ${this.name}`
    }
}

// Initialises the class
const lemmy = new Dog('Lemmy')
// Calls the hello() fucntion from the class
console.log(lemmy.hello())

// Inheriting from classes is possible through the extends keyword
class Woofer extends Dog {
    // A new hello function. Note no constructor needed as this extends from previous class
    hello(){
        // super relates the class to the parent class and retrieves the hello() fucntion
        return super.hello() + ' I am a doggo.'
    }
}

const zu = new Woofer('Zu')
console.log(zu.hello())

// Getters and Setters
class Cat {
  constructor(name) {
    this._name = name;
  }
  // getter is used to retrieve the attribute
  get name(){
    return this._name;
  }
  // setter is used to re-set the attribute to a new value
  set name(newName){
    this._name = newName;
  }
}
// Initialises the class
const zombie = new Cat('zombie');
console.log(zombie.name);
// Sets the new name
zombie.name = 'FuzzFace';
// Gets the new name
console.log(zombie.name);


// Exceptions
// These are used to catch errors. They consist of the try, catch and throw keywords
function myFunction(input) {
  console.log(input)
  // The following lines of code will be tried. If failing they will throw the followed error message
  try { 
    if(input == "")  throw "empty";
    if(isNaN(input)) throw "not a number";
    input = Number(input);
    if(input < 5)  throw "too low";
    if(input > 10)   throw "too high";
  }
  // If an error is thrown then the error is appended onto the output message
  catch(err) {
    return "Input is " + err
  }
}

console.log(myFunction("")) // Input is empty
console.log(myFunction('abc')) // Input is not a number
console.log(myFunction(30)) // Input is too high
console.log(myFunction(2)) // Input is too low
