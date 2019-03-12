// A new function is created by using the 'function' keyword, you then give that function a name, a couple of brackets, two braces and all the code for the function goes inside the braces
function greeting() {
  var name = "John";
  alert("Hello " + name);
}

// You "call" a function by writing the function name with the brackets
// This line is the reason why the above function actually executes
// Comment out this line to see what happens
greeting();

// The greeting() function above is hard-coded with the name John, but what if you want to be able to use the same function with any name?

// This new function takes one parameter, which is a variable called "name". In this case you don't need to use the 'var' keyword
function newGreeting(name) {
  alert("Hello " + name);
}

// Now when you call this function you MUST provide it with a value to represent the name
newGreeting("James");
newGreeting("Mary");
