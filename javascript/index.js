console.log("Hello, World!");

document.getElementById("hello").style.color = "blue";




document.getElementsByClassName("common")[1].style.backgroundColor = "green"


document.getElementsByTagName("h1")[1].style.color = "red";


document.querySelector(".common").style.fontSize = "40px";


function changeColor(){
    console.log("Button clicked!");
document.getElementById("hello").innerText = firstName;

    document.getElementById("hello").style.backgroundColor = "yellow";
}



var firstName = "Mukund"; 
// var firstName;
// firstName = "Mukund";


// var firstName = "Tenna";
// console.log(firstName);

let lastName = "Kapadia";
lastName = "Patel";
console.log(lastName);


const age = 25;
// age = 30; //cannot reassign
console.log(age); 

let canVote = true;
console.log(canVote);

let hi;
console.log(hi); 

let empty = null;
// console.log(empty);


let student1 = "Mukund";
let student2 = "Tenna";
let student3 = "Patel";
let student4 = "Kapadia";
let student5 = "John";
let student6 = "Doe";




let allStudents= ["Mukund", "Tenna", "Kapadia", "John", "Doe"];
let studentId = [101, 102, 103, 104, 105];
// console.log(allStudents);
// console.log(studentId);


// console.log(allStudents[3])

let combinedArray = ["mukund",[1,["hello","hii"],3], true,allStudents,studentId];
// console.log(combinedArray[1][1][1]);


let student = {
    name: "Mukund",
    age: 25,
    course:"comp23",
    isAdmin: true,
    phoneNumber: [  1234567890, 9876543210],
}


let college = {
    collegeName: "ABC College",
    location: "City XYZ",

    established: 1990,
    coursesOffered: ["comp23", "comp24", "comp25"],
    address: {
        street: "123 Main St",
        city: "City XYZ",
        zip: "12345"
    }
}

console.log(student.course);
console.log(student["address"]);



