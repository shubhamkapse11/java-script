



// console.log(a);


// console.log("Hello World");
// console.log("animesh kumar");

let  a = 10;

// console.log(a); 



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// let person1 = new Person("Animesh", 30);



// Basic Example

// class User {
//     constructor(name) {
//         this._name = name;
//     }

//     // Getter
//     get getName() {
//         return this._name;
//     }

//     // Setter
//     set name(value) {
//         this._name = value;
//     }
// }

// const user1 = new User("Rahul");

// // console.log(user1.name); // Getter called
// // console.log("--=>",user1); // Output: Rahul

// // user1.age = "25"; // Adding a new property
// // console.log("--=>",user1); // Output: Rahul

//  user1.name = "Aman"; // Setter called

// console.log(user1.getName);
// Output
// Rahul
// Aman








// function greet(name = "MILK") {
//     console.log("Hello " + name);
// }


// greet(); // Output: Hello Guest
// greet("cold drink"); // Output: Hello colddrink




// // Math.round()

// console.log(Math.round(4.4));

// console.log(Math.floor(10.9));

// console.log(Math.random());
// console.log(Math.random());

// let random  = Math.random()  * 100 ;
// console.log(random);
// console.log(Math.floor(random));


// let arr= [10, 20, 5, 15];

// console.log(Math.max(10, 20, 5, 15)); // Output: 20
// console.log(Math.min(10, 20, 5, 15)); // Output: 5

// console.log(Math.max(...arr)); // Output: 20
// console.log(Math.min(...arr)); // Output: 5


// console.log(Math.floor(10.9) ); // Generates a random integer between 1 and 100






// Problem Without Cloning

const user1 = {
  name: "Rahul"
};

// const user2 = user1;

// user2.name = "Aman";

console.log(user1.name);

// Output:

// Aman
// Why?

// Because:

// const user2 = user1;



const user2 ={...user1}

user2.name = "Aman";

console.log(user1.name);
console.log(user2.name);

// const user2 = Object.assign({}, user1);


let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

    const result = Object.assign({}, obj2, obj1);

    console.log(result); // Output: { a: 1, b: 3, c: 4 }




    try{

    } catch(error) {
        console.log("An error occurred: " + error.message);
    }



    try {
  console.log(a);
}
catch(error) {
  console.log("Variable not found");
}