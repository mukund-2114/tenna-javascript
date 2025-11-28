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

let x = 10;
let y = 5;
let z = x + y;

console.log("Addition:", z);

let sub = x - y;
console.log("Subtraction:", sub);

let mul = x * y;
console.log("Multiplication:", mul);

let div = x / y;
console.log("Division:", div);

let mod = 15 % 4;
console.log("Modulus:", mod);

// x++;
// y--;
// ++x;
// --y;
// x = x + 1;
// x=10
// console.log("Incremented x:", ++x);
// console.log("Incremented x:", x++);
// console.log("Incremented x:", x);

// console.log("Decremented y:", y);

 x = 10;

 x = x +15;
 x +=15; //x=x+15



 let myage = 4;

// if(myage != 20){
//     console.log("You are 20 years old");
// }
// else{
//     console.log("You are not 20 years old");
// }
// 
// if(myage >= 18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You cannot vote")
// }


let isEligible = true

// if(!isEligible){
//     console.log("you are eligible")
// }
// else{
//     console.log("Not eligible")
// }

myage = 200

if(myage >= 18 && myage < 100){
    console.log("You are eligible to vote");
}
else{
    console.log("You cannot vote")
}

let weather = "raining"
let haveWork = false

if(weather == "raining" || haveWork){
    console.log("I will not go outside")
}

else{
    console.log("go outside")
}


let marks = 150


// marks is greater 90 and less 100 ----grade a
// marks is greater 70 and less 90 ----grade b
// marks is greater 70 and less 90 ----grade b
// marks is greater 70 and less 90 ----grade b

if(marks > 90){
    console.log("Grade A")
}
else if( marks > 70){
    console.log("Grade B")
}
else if(marks > 60){
    console.log("Grade C")
}
else if(marks > 0){
    console.log("Grade D")
}
else {
    console.log("Invalid Marks")
}


// create a small calculator
// ask user for 2 numbers and one operation

// let num = prompt("enter a value")
// console.log(num)


let a = 10
// let b = prompt("enter value of b")

// console.log("a",a)
// console.log("b",b)
// console.log("Addition",a+b)

// document.write(a+b)



let code = 2

switch(code){ 
    case 1: console.log("live orders"); break;
    case 2: console.log("cancel the order"); break;
    case 3: console.log("update payment");break;
    case 4: console.log("talk to customer care");break;
    default: console.log(" please enter a valid code");break;
}


let meet = "HR"

switch(meet){
    case "Admin": console.log("this is admin ");break;
    case "Marketing":console.log("marketign team");break;
    case "HR":console.log("hr");break;
    case "business":console.log("business people");break;
    default: console.log("not present")
}


