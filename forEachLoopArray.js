
//======= Ex1. using function to print array of donuts
// var donuts = ["jelly donut","chocolate donut","glazed donut"];

// function printDonuts(donut){
//   donut += "hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// }
// donuts.forEach(printDonuts);

// ======= Ex2.  Code above same result as below

// var donuts = ["jelly donut","chocolate donut","glazed donut"];
// for(let i = 0; i < donuts.length; i++){
//   donuts[i] += " hole";
//   donuts[i] = donuts[i].toUpperCase();
//   console.log(donuts[i]);
// }

// ======== Ex3. Code below is refactor the function by remove "PrintDonuts" from Ex.1
// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
// donuts.forEach(function(donut) {
//   donut += " hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// });


// The function that you pass to the forEach() method can take up to three parameters. In the video, 
// these are called element, index, and array, but you can call them whatever you like.
// The forEach() method will call this function once for each element in the array 
// (hence the name forEach.) Each time, it will call the function with different arguments. 
// The element parameter will get the value of the array element. 
// The index parameter will get the index of the element (starting with zero). 
// The array parameter will get a reference to the whole array, 
// which is handy if you want to modify the elements.
// Here's another example:
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
  //console.log(all);
});

