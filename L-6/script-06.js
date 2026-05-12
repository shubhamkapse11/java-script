

// console.log("Welcome Vijay");
// console.log("Welcome rupesh");
// console.log("Welcome Animesh");

// 👉 Repeating code again and again ❌

// 📌 Solution Using Function




function welcome(name) {
  console.log("my name is " + name);
}

// welcome("Vijay");
// welcome("rupesh");
// welcome("Animesh");






// function syntax

function printMyName()
{
   console.log("My name is Animesh");

} 



// printName();



// with params || arg 


function printName(name){
    console.log("My name  is" + " " + name)
}

// printName("shubham");
// printName("Animesh");
// printName("rupesh");




// multu params 

function AddNum (  a  ,  b  ) {

    // let result = a + b;
    

     console.log(a+b);

    // console.log(result);

}

//  AddNum(10,20);




 
 //  With Return

function add(a, b) {
//   return a + b;
console.log(a + b);
}

// let result = add(10, 20);

// console.log(result);
// 🧠 Explain Carefully
// Step 1:
// return a + b;

// 👉 Sends result back

// Step 2:
// let result = add(10, 20);

// 👉 Store returned value



function add(a, b) {

    //  return  a + b

     let ans = a + b;
     return ans;
}

let money = add(22 , 33) ;
// console.log(money);






function AddValue(a,b){
    let ans = a + b;
    return ans;
}


let result = AddValue(100,200);
// console.log(result);


//  let result2 = AddValue("1000",2000);
// console.log(result2);

// let result3 = AddValue("Hello ", "World");
// console.log(result3);



let name = "Animesh";


let fullnameFunc = () => console.log( name + " " + "Shubham");


// function          {}
//    =>         console.log( name + " " + "Shubham");


// let fullname = () => {
//     let fullName = name + " " + "Shubham";
// }



fullnameFunc();










// 📌 C. Arrow Function (ES6)
// 🧠 Definition

// Modern and shorter way to write functions.

// 📌 Syntax
const greet = () => {
  console.log("Hello");
};
// 📌 Example with Parameters
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 10));
// 🧠 Short Arrow Function
const add = (a, b) => a + b;
// 🧠 Explain

// If only one line:
// 👉 return keyword optional









