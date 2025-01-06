// function scope

// function exampleFunction() {
//     const x = "declared inside function"; // x can only be used in exampleFunction
//     console.log("Inside function");
//     console.log(x);
//   }
  
//   console.log(x); // Causes error?

// Global scope
// const x = "declared outside function";  // this is global scope

// exampleFunction();

// function exampleFunction() {
//   console.log("Inside function");
//   console.log(x);
// }

// console.log("Outside function");
// console.log(x);

// Blocks only scope let and const declarations, but not var declarations.

// {
//     var x = 1;
//   }
//   console.log(x); // 1

// {
//     const x = 1;
//   }
//   console.log(x); // ReferenceError: x is not defined
