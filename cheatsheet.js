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

// Array.prototype.foreach()
// This loops over each value and does something ( a bit like map)
array3.forEach( val => console.log(val) ) // Returns each vale from the array on a new line
array3.forEach( val => console.log(val + 5) ) // Returns each vale from the array on a new line + 5

// for loops (2 types)
for (let v of array3){
    console.log(v) // Logs every item in the array again
}

for (let i = 0; i < array3.length; i++){
    console.log(array3[i]) // Logs every item in the array again
}

// Adding to arrays
array3.push('banana')
console.log(array3) // Returns [1, 1, 89, 29, 62, 13, "banana"]

array3.unshift('apple')
console.log(array3) // Returns ["apple", 1, 1, 89, 29, 62, 13, "banana"]

// Removing from arrays
array3.pop('banana')
console.log(array3) // Returns [1, 1, 89, 29, 62, 13]

array3.shift('apple')
console.log(array3) // Returns [1, 1, 89, 29, 62, 13]

// Splice allows more precision. Arguments set the value to start removing from and the number to remove
array3.splice(0, 2)
console.log(array3) // Returns [89, 29, 62, 13]
array3.splice(2, 1)
console.log(array3) // Returns [89, 29, 13]
// This can also add values in at the position of the splice, in this case 1, 1 are added at position 0
array3.splice(0, 0, 1, 1)
console.log(array3) // Returns [1, 1, 89, 29, 13]
array3.splice(4, 0, 62)
console.log(array3) // Returns [1, 1, 89, 29, 62, 13]

// Join arrays using concat.
// firstArray.concat(secondArray)
console.log(array1.concat(array3))

// Finding values
console.log(array3.indexOf(62)) // Returns 4

// Check if an array contains a value
console.log(array3.includes(62)) // Returns true

// Cutting an array down using slice() Arguments are start and end elements
var animals = ['elephant', 'bison', 'duck', 'camel', 'ant'];
console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]

// Sorting an array using sort(). Sorts by converting to strings and using UTF-16 code units values
console.log(animals.sort())
// A compare function can also be added. The first argument is the first element for comparison, the second argument is the second element for comparison
// The below comapres each value to the next one and returns it to the array depending on if it is bigger, smaller or the same
console.log(animals.sort((a, b) => {if(a < b) { return -1 } if(a > b) { return +1 } else {return 0} }))

// Reverse the array order
console.log(animals.reverse())

//Joining an array with join() The arguments set the separator
console.log(animals.join()) // ant,bison,camel,duck,elephant
console.log(animals.join(', ')) // ant, bison, camel, duck, elephant
// Can also use toString()
console.log(animals.toString())

// Copy an array using the rest operator
const bnimals = [...animals]
console.log(bnimals)

// Events
// Event handlers are used to respond to events 
// These can be added when the DOM has loaded
window.onload = () => {
    //window loaded
}

// They can be added inline but this is rarely used these days
<a href="site.com" onclick="someFunction();">A link</a>

// They can be added using addEventListener(). This is the most common way to do this
// This example adds the listener when the DOM has loaded
window.addEventListener('load', () => {
    // window loaded
})
// This example adds a listener to a link that watches for a click event
// The first parameter is always the event to listen for
const link = document.getElementById('my-link')
link.addEventListener('click', event => {
    // Link clicked
})
// This creates an Event object with many retrievable properties.
// https://developer.mozilla.org/en-US/docs/Web/API/Event
// Several event listeners can be added to the same object.
// They can be removed using removeEventListener()

// There are 2 ways of firing events Bubbling fires from the lowermost child and bubbles up to the parent, whereas Capturing fires the outermost first and works its way in.
// Bubbling is the default and capturing is switched by adding true at the end of the function
const link = document.getElementById('my-link')
link.addEventListener('click', event => {
    // Link clicked
}, true) // This final true keyword switches to capturing

// Propagation through the DOM can be stopped via stopPropagation()
const link = document.getElementById('my-link')
link.addEventListener('click', event => {
    // Link clicked
    event.stopPropagation() // Stops the propagation at this DOM level
}, true)


// Asynchronous programming 
// Callbacks are simple functions passed as arguments to other functions
window.addEventListener('load', () => {
    // window loaded
    // Callback function added here
})

// Errors are handled by making the first argument an error
window.addEventListener('load', () => {
    // window loaded
    (err, data) => {
        if (err !== null){
            // handle the error
        } else {
            // process data
        }
    }
})

// The problem with callbacks is that you can end up with a large level of nesting (Callback Hell!)

// Promises
// A promise is a proxy for a value that will eventually become available
// Creating a promise
// Set a value to compare to
let done = true
// Create the promise
const isItDoneYet = new Promise(
    // The function takes resolve and reject arguments
    (resolve, reject) => {
        // Compare to the value of done
        if (done) {
            // Set a value to return
            const workDone = 'Here is the thing I built'
            // return the value via resolve
            resolve(workDone)
        } else {
            // Set a value to return
            const why = 'Still working on something else'
            // return the value via reject
            reject(why)
        }
    }
)

// Consuming/using a promise
const checkIfItsDone = () => {
    isItDoneYet
        .then((ok) => {
            console.log(ok)
        })
        .catch((err) => {
            console.error(err)
        })
}
// Running checkIfItsDone() will run the promise and wait for it to be done using the then() callback function. Errors are handled with catch()

// Functional use of a promise. Getting top 10 users on freeCodeCamp
// This url no longer works but the example is sound
const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers() {
    // Runs fetch on apiUrl. This returns a promise
    fetch(apiUrl)
    // r is the result. This is converted to json but only when it is returned
    .then((r) => r.json())
    // Logs the json data to the console but only when ready
    .then((json) => {
        console.log(json[0])
    // Catches any errors and logs to the console
    }).catch((error) =>{
        console.log('failed');
    });
}

getTop100Campers();
