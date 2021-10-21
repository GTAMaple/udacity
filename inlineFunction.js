/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */

// don't change this code
// emotions() function definition
// myFunc call an inline function expression passed as the second parameter
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

//inline function expression argument
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
 emotions("happy", function(num) {
  var sound = "";
  //Iterate
  for (var x = 0 ; x < num ; x++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});
