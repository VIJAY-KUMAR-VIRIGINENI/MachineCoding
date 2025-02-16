// ---------------------------------------------------------
// Section 1: Closure Example
// Q: What will be the output when you invoke the closures, and how does each closure maintain its own environment?
function closure() {
  let a = 1;
  return function () {
    return a++;
  };
}

let c1 = closure();
console.log(c1()); // Expected output: 1
console.log(c1()); // Expected output: 2
console.log(c1()); // Expected output: 3

let c2 = closure();
console.log("c2", c2()); // Expected output: "c2 1"

// ---------------------------------------------------------
// Section 2: Variable Mutation and Function Scope
// Q: When you call sayHi(), does it print "John" or "Pete"? Why?
let name1 = "John";

function sayHi() {
  console.log("Hi, " + name1);
}

sayHi(); // Logs: "Hi, John"
name1 = "Pete"; // Changing the value for potential future calls

// ---------------------------------------------------------
// Section 3: Nested Functions and Lexical Scope
// Q: What will be logged to the console when z() is called, and why do the inner functions have access to outer variables?
function z() {
  var a = 100;
  function y() {
    var b = 200;
    function x() {
      console.log(a, b); // Logs: 100 200
    }
    x();
  }
  y();
}
z();

// ---------------------------------------------------------
// Section 4: setTimeout and Variable Mutation
// Q: What is the order of execution here, and what value is printed by the setTimeout callback? Explain why.
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i); // Expected output (after 3 seconds): 2, because i was incremented.
  }, 3000);
  i++;
  console.log("Namaste Javascript"); // Immediately logs: "Namaste Javascript"
}
x();

// ---------------------------------------------------------
// Section 5: Sequential Printing with Delays
// Q: How does this code ensure that it prints 1 after 1 second, 2 after 2 seconds, ... up to 5 after 5 seconds?
function seqPrint() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
seqPrint();
