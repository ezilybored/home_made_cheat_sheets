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
