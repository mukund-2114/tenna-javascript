const students = ["John","jack","lucy"]

console.log(students[1])


//push method

// const newarray = students.push("harry")

// console.log(students)
// console.log(newarray)

//pop method

const poparray = students.pop()
console.log(poparray)


// shift method

students.shift()
console.log(students)

//unshift method
students.unshift(5)
console.log(students)

// datastructure
// stack, queue, tree,


const fruits = ["Banana", "Orange", "Apple", "Mango","aidf","oiahdf","au8eioa"];



let myList = fruits.toString();


console.log(myList)

// let myarray = myList.split(',')
// console.log(myarray)

let joinelements = fruits.join(' & ')
console.log(joinelements)


const combined = students.concat(fruits)
console.log(combined)


const citrus = fruits.slice(2);
console.log(citrus)

fruits.splice(2, 3);
console.log(fruits)

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits2[0];
console.log(fruits2)

const hi = fruits2.sort()
console.log("hi",fruits2)
console.log(hi)

const num1 = [1,2,3,5]
const num2 = [5,6,2,1]

const comb = [...num1,...num2,56,185,216,9819]
console.log("comb",comb)