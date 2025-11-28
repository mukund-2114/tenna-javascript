// for(let i=0; i<10; i=i+2){
//     console.log(i)
// }


// for(let i=10;i>0;i--){
//     console.log(i)
// }


let str = "hello"

// console.log(str.length)

// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

let i=0
while(i<10){
    // console.log(i)
   i++
}

// while(true){

//     let input = prompt("enter something")
//     if(input >10 && input <20){
//         break;
//     }
//     console.log("hello")
// }


// let j=10
// do{
//     console.log("hi",j)
//     j++
// }
// while(j<9)


let student1 = "john"
let student2 = "alice"
let student3 = "bob"
let student4 = "jane"
let student5 = "mike"


let allStudents = ["john","alice","bob","jane","mike"]
let studentIDs = [101,102,103,104,105]
console.log(allStudents)


let studentData = {
    name: "john",
    age: 20,
    id: 101,
    courses: ["math","science","history"],
    address:{
        street: "123 main st",
        city: "new york",
        zip: "10001"
    }
}

console.log(studentData.address.city)


let students = ["john","alice","bob","jane","mike"]

for(let i=0 ; i<students.length ;i++){
    console.log(students[i])
}


// for(let i=0; i<users.length;i++){
//     console.log(users[i]["address"]["city"])
// }


function greeting(){
    console.log("greeting, welcome")
}

greeting()


function addition( val1, val2){
    console.log("addition",val1+val2)
}

addition(6,19)
addition(195,264)


// let a = 5
// let b = 10
// console.log("additon",a+b)