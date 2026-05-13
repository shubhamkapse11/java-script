

// consolreLog();


//  {



// function consolreLog() {
//     console.log("message");
// }
//  }

// consolreLog();


// let a = 10;

// funAssign();

// let funAssign = function () {
//     console.log("message");
// }


// var name;

// console.log(name);
// var name = "John";


// console.log(name2);
// let name2 = "vijay";



// TDZ happens with:

// let
// const
// Easy Understanding

// Variables are hoisted in memory, but JavaScript does not allow access until initialization is completed.

// Example

// console.log(a);

// let a = 10;

// Output:

// ReferenceError
// Why?

// Because:

// a is hoisted
// But stays inside TDZ
// Access is blocked before initialization
// Visual Understanding
// TDZ starts

// console.log(a); // ❌ Cannot access

// let a = 10;

// TDZ ends
// Example with const
// console.log(pi);

// const pi = 3.14;

// Output:

// ReferenceError



// class 


// class personDetails {
//     name;
//     age;
//     // constructor() {
//     //     this.name = "vijay";
//     //     this.age = 25;
//     // }
// }

//  let person = new personDetails();



 
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// const s1 = new Student("Rahul", 22);

// console.log(s1);

// const s2 = new Student("Priya", 20);

// console.log(s2);


const shubham = new Student("Shubham", 25);
console.log(shubham);




// class home {
//     grocery = "milk",
//     furniture = "sofa"
// }

