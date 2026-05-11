
// 2. Primitive Data Types
// Definition

// Primitive data types store:

// Actual Value

// They are copied by:

// Value Copy
// Important Point

// When we copy primitive data:
// ✅ A separate copy is created
// ✅ Original value does NOT change

        // Example 1 – String Copy
// let stringName = "John Doe";

// console.log(stringName);

// stringName = "Shubh";

// let stringCopy = stringName;
// stringCopy = "kapse";

// console.log(stringCopy);
// Output
// John Doe
// Shubh



// Better Example for  Copy Concept
let name1 = "John";

let name2 = name1;

name2 = "Shubh";

// console.log(name1);
// console.log(name2);
// Output
// John
// Shubh



let arrCon =  new Array(1,"shubh", true);

// console.log(arr);
// console.log(arrCon);
// Output
// [1, "shubh", true]
// [1, "shubh", true]


// let arr = [1,"shubh", true];
// let arrNum = [1,2,3,4,5];
// let arrString = ["shubh", "kapse", "javascript"];

// // How to Access
//  let arrindex1 = arr[0]
//  console.log(arrindex1);
//  console.log(arr[0]);

//  console.log(arrNum[2]);
//  console.log(arrString[1]);




// let fruits = [ "Apple", "Banana", "Mango" ,1 , 6, true, "Grapes"];
// let fruitsCopy = fruits;
// fruits[0] = "Grapes";


// console.log(fruits);
// // console.log(fruitsCopy);

// console.log(fruits.length);


// fruits.push("Mango");

// console.log(fruits);


//  fruits.pop();
//  console.log(fruits);


//  fruits.shift();

//     console.log(fruits);


//     fruits.unshift("shubham");

//     console.log("fruits", fruits);



    
//  What is an Object?


// An Object in JavaScript is a collection of key-value pairs.

// let name = "John";
// let age = 30;

//  let person = {
//    name:"John", 
//     age:30

//  }   
// let arr = [1,2,3,4,5];
//  {
//         key :  arr
//  }





// Method 2 – Using new Object()


// let person = new Object();   // let person = {}


// person.name = "Aman";
// person.age = 25;


// console.log(person);






// 4. Access Object Values

// There are 2 ways.

// Method 1 – Dot Notation

// let student = {
//   name: "Rahul",
//   age: 22 ,
//   dob: "01-01-2000"
// };



// console.log(student.name);
// console.log(student.age);
 
// Method 2 – Bracket Notation
// console.log(student["name"]);
// console.log(student["age"]);

// console.log(student["dob"])




let studentObj = {
        name: "animesh",
        age: 25,  
}

 studentObj.rating =4.5;


 delete studentObj.age;

  console.log(studentObj);


  
// let student = {

//   name: "Rahul",

//   greet: function(){
//     console.log(`hello, my name is ${this.name}`);
//   }

// };


// student.greet();






// Nested Objects


// let classroom = {
//         name: "Maths",
//         teacher: {
//                 name: "Mr. Smith",
//                 subject: "Algebra",
//                 backupTeacher: {
//                         name: "Ms. Johnson",
//                         subject: "Geometry"
//                 }
//         }
// }



// let student = {

//   name: "Rahul",

//   address: {
//     city: "Bhopal",
//     state: "MP"
//   }

// };

// let studentCity =student.address.city;
// console.log(studentCity);
//     // or 
// console.log(student.address.city);


// console.log(student.address.city);






let student = {
  name: "Rahul",
  age: 22
};

Object.keys(student); // ["name", "age"]
Object.values(student); // ["Rahul", 22]

console.log(Object.keys(student));
console.log(Object.values(student));




 let ArrayofStudents = ["subh", "animesh", "rahul", "sachin"];

 console.log(ArrayofStudents.length);
 






















