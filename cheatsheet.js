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


// ES6 Functions
// sum is the variable to store the return. a and b are arguments
const sum = (a, b) => {
    return a + b
}
console.log(sum(2, 3))

// Alternative ES5 version
function summed(a, b) {
    return a + b
}
console.log(summed(2, 3))

// Default values can be passed for arguments
const doSomething = (foo = 1, bar = 'hey') => {
    console.log(foo + bar)
}
doSomething(2, 'ho!') // Logs 2ho!
doSomething() // Logs 1hey

// Arguments can be passed in via an object
const doSomethingElse = ({foo = 1, bar = 'hey'}) => {
    console.log(foo)
    console.log(bar)
}
const args = { foo: 2, bar: 'ho!' }
doSomethingElse(args) // Logs 2 ho!
const args2 = { foo: 'happy', bar: 'birthday' }
doSomethingElse(args2) // Logs happy birthday

// When the return keyword is met the function is terminated and any value is returned.
// Only one value can be returned.
// If more than one is required then an array or object can be returned and destructured when calling the function

const doSomethingNew = () => {
    // This function returns an object with the name and age keys
    return { name: 'Captain', age: 198 }
}
// Assigns the values of name and age using the values assigned to these keys in the returned object
const { name, age } = doSomethingNew()
console.log(name) // Logs Captain
console.log(age) // Logs 198
// This can also be done identically with an array

// Nested functions can be used to run function within functions
const doSomethingAmazing = (a, b) => {
    // Reuns a second function with the same arguments passed in
    const doSomethingExtra = (a, b) => {
        return a * b
    }
    // Returns the value of doSomethingExtra plus the value of a plus the value of b
    return doSomethingExtra(a, b) + a + b
}
console.log(doSomethingAmazing(2, 5))

// When functions are run within objects they are called methods
// They cannot be run using arrow notation
let car = {
  brand: "Nissan",
  model: 'Micra',
  started: function() {
      return `Started ${this.brand} ${this.model}`
    }
};
console.log(car.started()) // Returns "Started Nissan Micra"

// IIFE is an immediately run function
// The arguments are passed in the brackets after the function and the whole function is placed in brackets. The result can be stored in a variable
const fruit = ((a, b) => {
    return a + b
})('apple', 'banana')

console.log(fruit)


// Arrays
// Initialise. (Don't use the other method)
const a = []
// Initialise a 6 value array all of value 1
const b = Array(6).fill(1)
console.log(b) // Logs [1,1,1,1,1,1]

// Find the length of an array
const len = b.length
console.log(len) // Logs 6

// Array.prototype.every()
// Used to check if every value in an array meets a condition
var array1 = [1, 30, 39, 29, 10, 13];
// Checks if every value is below 40. Iterates through the array passing each value into the function as val
console.log(array1.every((val) => { return val < 40 })); // Returns true

// Array.prototype.some()
// Used to check if some values in an array meet a condition
var array2 = [1, 30, 89, 29, 62, 13];
// Checks if some of the values are below 40. Iterates through the array passing each value into the function as val
console.log(array2.some((val) => { return val < 40 })); // Returns true

// Array.prototype.filter()
// Used to check if values in an array meet a condition. Returns a new array of these values
var array3 = [1, 1, 89, 29, 62, 13];
// Checks if some of the values are below 40. Iterates through the array passing each value into the function as val
console.log(array3.filter((val) => val < 40 )); // Returns [1, 30, 29, 13]
// filter can take other arguments. The second argument is the current position in the array
// This filter compares the value to the position and only returns if they are the same
console.log(array3.filter((val, pos) => val == pos )); // Returns [1]

// Array.prototype.map()
// Used to apply a function to every value in the array
// This map multiplies every value in the array by 2
console.log(array3.map( val =>  val * 2 )) // Returns [2, 2, 178, 58, 124, 26]
// Can combine map and filter. This doubles each value and then only returns those below 40
console.log(array3.map( val =>  val * 2 ).filter((val) => val < 40 )) // Returns [2, 2, 26]
// map can also take other arguments. The second argument is the current position in the array
// This example multiplies the value by the position
console.log(array3.map( (val, pos) =>  val * pos )) // Retunrs [0, 1, 178, 87, 248, 65]

// Array.prototype.reduce()
// This is a function that reduces all of the values in an array to a single value
// The first argument is the accumulator, the second the value and the third the position
console.log(array3.reduce((acc, val) => acc + val)) // Returns 195
