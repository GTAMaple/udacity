var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

console.log("Method: " + sister.paintPicture());// method
console.log("Property: " + sister.favoriteColor);// property