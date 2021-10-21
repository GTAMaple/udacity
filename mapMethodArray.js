
// With the map() method, you can take an array, 
// perform some operation on each element of the array, 
// and return a new array.var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(improvedDonuts);