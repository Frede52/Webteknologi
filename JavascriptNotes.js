
//Arrays
//Arrays


// Array of teachers
const teachers = ["Torill", "Thomas", "Mads", "Heine", "Susanne"];

// Accessing the first element
console.log("First teacher:", teachers[0]); // "Torill"

// Accessing the third element
console.log("Third teacher:", teachers[2]); // "Mads"



// Array of teacher objects
const teachersArrayOfObjects = [
    { name: "Torill", subject: "Dataforståelse" },
    { name: "Thomas", subject: "Webteknologi" },
    { name: "Mads", subject: "Digital Kultur" },
    { name: "Heine", subject: "Projektstyring" },
    { name: "Susanne", subject: "21st Century Skills" }
  ];
  
  // Accessing the first object's name
  console.log("First teacher's name:", teachersArrayOfObjects[0].name); // "Torill"
  
  // Accessing the second object's subject
  console.log("Second teacher's subject:", teachersArrayOfObjects[1].subject); // "Webteknologi"


  // Array of arrays [name, subject, average student attendance]
const teachersArrays = [
    ["Torill", "Dataforståelse", 27],
    ["Thomas", "Webteknologi", 29],
    ["Mads", "Digital Kultur", 23],
    ["Heine", "Projektstyring", 7],
    ["Susanne", "21st Century Skills", 10]
  ];
  
  // Accessing the first teacher's name
  console.log("First teacher's name:", teachersArrays[0][0]); // "Torill"
  
  // Accessing the third teacher's subject
  console.log("Third teacher's subject:", teachersArrays[2][1]); // "Digital Kultur"




// 1. Array.prototype.push
// The push method adds one or more elements to the end of an array and returns the new length of the array.
teachers.push("John");
console.log("Array after push:", teachers); // ["Torill", "Thomas", "Mads", "Heine", "Susanne", "John"]




// 2. Array.prototype.pop
// The pop method removes the last element from an array and returns that element.
const lastTeacher = teachers.pop();
console.log("Popped element:", lastTeacher); // "John"
console.log("Array after pop:", teachers); // ["Torill", "Thomas", "Mads", "Heine", "Susanne"]




// 3. Array.prototype.shift
// The shift method removes the first element from an array and returns that element.
const firstTeacher = teachers.shift();
console.log("Shifted element:", firstTeacher); // "Torill"
console.log("Array after shift:", teachers); // ["Thomas", "Mads", "Heine", "Susanne"]




// 4. Array.prototype.unshift
// The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
teachers.unshift("Anna");
console.log("Array after unshift:", teachers); // ["Anna", "Thomas", "Mads", "Heine", "Susanne"]




// 5. Array.prototype.map
// The map method creates a new array with the results of calling a provided function on every element in the calling array.
const uppercasedTeachers = teachers.map(function(teacher) {
  return teacher.toUpperCase();
});
console.log("Array after map:", uppercasedTeachers); // ["ANNA", "THOMAS", "MADS", "HEINE", "SUSANNE"]




// 6. Array.prototype.filter
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
const filteredTeachers = teachers.filter(function(teacher) {
  return teacher.startsWith("T");
});
console.log("Array after filter:", filteredTeachers); // ["Thomas"]




// 7. Array.prototype.reduce
// The reduce method applies a function against an accumulator and each element in the array to reduce it to a single value.
const concatenatedTeachers = teachers.reduce(function(accumulator, teacher) {
  return accumulator + ", " + teacher;
});
console.log("Array after reduce:", concatenatedTeachers); // "Anna, Thomas, Mads, Heine, Susanne"




// 8. Array.prototype.find
// The find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
const foundTeacher = teachers.find(function(teacher) {
  return teacher === "Heine";
});
console.log("Found element:", foundTeacher); // "Heine"




// 9. Array.prototype.findIndex
// The findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
const foundIndex = teachers.findIndex(function(teacher) {
  return teacher === "Heine";
});
console.log("Found index:", foundIndex); // 3




// 10. Array.prototype.includes
// The includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const includesTeacher = teachers.includes("Susanne");
console.log("Includes 'Susanne':", includesTeacher); // true

  


//11. Array.prototype.sort  

//Applying sort function on arrays of arrays.

// Sort in alphabetical order
teachers.sort();
console.log("Array after sort:", teachers); // ["Anna", "Heine", "Mads", "Susanne", "Thomas"]

// Sort in reverse alphabetical order
teachers.sort().reverse();
console.log("Array after reverse sort:", teachers); // ["Thomas", "Susanne", "Mads", "Heine", "Anna"]

//sorts by student attendence going up
let sortedTeachersAscending = teachersArrays.sort( (a, b) => {
    return a[2]-b[2];
})
console.log(sortedTeachersAscending)

//sorts by student attendence going down
let sortedTeachersDescending = teachersArrays.sort( (a, b) => {
    return b[2]-a[2];
})
console.log(sortedTeachersDescending)


//Applying sort function on array of objects. Example:

function vip(name, rank, age, knownFor) {
    this.name = name;
    this.rank = rank;
    this.age = age;
    this.knownFor = knownFor;
}

//To sort by age ascending:
vip.sort(function(a,b) {
    return a.age - b.age;
    });


//To sort by age descending:
vip.sort(function(a,b) {
    return b.age - a.age;
    });





    //Funktioner
    //Funktioner





// Function Declaration
// Function declarations are hoisted, meaning they can be called before they are defined.
function startCar() {
    return "Car started!";
  }
  
  // Calling the function
  console.log(startCar()); // Output: Car started!
  


  // Function Expression
  // Function expressions are not hoisted, meaning they cannot be called before they are defined.
  const stopCar = function() {
    return "Car stopped!";
  };
  
  // Calling the function
  console.log(stopCar()); // Output: Car stopped!
  


  // Arrow Function
  // Arrow functions provide a shorter syntax for writing functions. They do not have their own 'this' value.
  const accelerateCar = () => {
    return "Car is accelerating!";
  };
  
  // Calling the function
  console.log(accelerateCar()); // Output: Car is accelerating!
  


  // Arrow Function with Implicit Return
  // If the function body contains only a single expression, you can omit the braces and the return statement.
  const brakeCar = () => "Car is braking!";
  
  // Calling the function
  console.log(brakeCar()); // Output: Car is braking!
  


  // Functions with Parameters
  // Functions can take parameters and return a value based on those parameters.
  function setCarColor(car, color) {
    car.color = color;
    return car;
  }
  
  // Example object
  let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Red"
  };
  
  // Calling the function with parameters
  console.log(setCarColor(myCar, "Blue")); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }
  
  // Functions with Default Parameters
  // Default parameters allow you to initialize parameters with default values if no value is provided.
  function describeCar(car = { make: "Unknown", model: "Unknown", year: 0, color: "Unknown" }) {
    return `${car.year} ${car.color} ${car.make} ${car.model}`;
  }
  
  // Calling the function with and without parameters
  console.log(describeCar(myCar)); // Output: 2020 Blue Toyota Camry
  console.log(describeCar()); // Output: 0 Unknown Unknown Unknown
  


  // Immediately Invoked Function Expression (IIFE)
  // IIFE is a function that runs as soon as it is defined. It's often used to create a local scope.
  (function() {
    console.log("This car function runs immediately!");
  })(); // Output: This car function runs immediately!
  


  // Higher-Order Functions
  // Higher-order functions are functions that take other functions as arguments or return functions as their result.
  function withCar(car, action) {
    return action(car);
  }
  
  // Example of using a higher-order function
  console.log(withCar(myCar, car => `The car is a ${car.color} ${car.make} ${car.model}`)); 
  // Output: The car is a Blue Toyota Camry
  

  
  // Method Chaining in Functions
  // Method chaining is a technique where multiple methods are called on an object in a single statement.
  // This is done by returning the object itself (`this`) from each method.
  
  
  function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  
    this.paint = function(newColor) {
      this.color = newColor;
      return this; // Enable chaining
    };
  
    this.describe = function() {
      return `${this.year} ${this.color} ${this.make} ${this.model}`;
    };
  }
  
  // Creating a new Car object
  let chainedCar = new Car("Honda", "Civic", 2021, "Black");
  
  // Using method chaining
  console.log(chainedCar.paint("White").describe()); // Output: 2021 White Honda Civic

  

  //Loops
  //Loops



  (function(){

    // Array of teachers
    const teachers = ["Torill", "Thomas", "Mads", "Heine", "Susanne"];
    
    // 1. for Loop
    // The for loop repeats a block of code as long as a specified condition is true.
    // It consists of three parts: initialization, condition, and increment/decrement.
    for (let i = 0; i < teachers.length; i++) {
      console.log("for loop iteration:", teachers[i]);
    }
    
    
    // 2. while Loop
    // The while loop repeats a block of code as long as a specified condition is true.
    // The condition is evaluated before the block of code is executed.
    let j = 0;
    while (j < teachers.length) {
      console.log("while loop iteration:", teachers[j]);
      j++;
    }
    
    // 3. do...while Loop
    // The do...while loop is similar to the while loop, but the block of code is executed at least once before the condition is evaluated.
    let k = 0;
    do {
      console.log("do...while loop iteration:", teachers[k]);
      k++;
    } while (k < teachers.length);
    
    // 4. for...in Loop
    // The for...in loop iterates over the properties of an object (or the indexes of an array).
    for (let index in teachers) {
      console.log("for...in loop - index:", index, "value:", teachers[index]);
    }
    
    // 5. for...of Loop
    // The for...of loop iterates over the values of an iterable object (like an array, string, or set).
    for (let teacher of teachers) {
      console.log("for...of loop value:", teacher);
    }
    
    
    // 6. Array.prototype.forEach
    // The forEach method executes a provided function once for each array element.
    // It takes three parameters: the current element, the current index, and the array itself.
    teachers.forEach(function(teacher, index, array) {
      console.log("Array.prototype.forEach - index:", index, "value:", teacher, "array:", array);
    });
    })();


    
    //Objects
    //Objects

    

// Define an object named pet
let pet = {
    animal: "Dog",
    breed: "Golden Retriever",
    name: "Mads",
    age: 35
  };
  
  // Accessing object properties using dot notation
  console.log("Animal:", pet.animal); // Output: Animal: Dog
  console.log("Breed:", pet.breed);   // Output: Breed: Golden Retriever
  console.log("Name:", pet.name);     // Output: Name: Mads
  console.log("Age:", pet.age);       // Output: Age: 35
  


  // Adding a method to the pet object
  pet.speak = function() {
    return "Woof!";
  };
  


  // Calling the method
  console.log("Speak:", pet.speak()); // Output: Speak: Woof!
  


  // Difference between methods and properties
  // Properties are values associated with an object. Methods are functions associated with an object.
  console.log("Property - age:", pet.age); // Property example
  console.log("Method - speak:", pet.speak()); // Method example
  


  // Method chaining
  // Method chaining is the practice of calling multiple methods on an object in a single statement.
  pet.setAge = function(newAge) {
    this.age = newAge;
    return this; // Return the object to enable chaining
  };
  


  pet.describe = function() {
    return `${this.name} is a ${this.age}-year-old ${this.breed}`;
  };
  


  // Using method chaining to set the age and then describe the pet
  console.log(pet.setAge(5).describe()); // Output: Mads is a 5-year-old Golden Retriever
  