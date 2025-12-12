// function findaddress(log,lat){
//     console.log("address is somehting")
// }

// findaddress(41,15)

const findAddress = (log,lat) =>  log+lat;

console.log(findAddress(51,13))



const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


let {fname:firstName,age} = person

console.log(firstName)

const fruits = ["Bananas", "Oranges", "Apples", "Mangos","Bananas"];

// Destructuring
let [fruit1, fruit2] = fruits;

console.log(fruit1)
console.log(fruit2)

const mybasket = ["cherries","watermelon",...fruits]
console.log(mybasket)
