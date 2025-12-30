// console.log("task 1 running")
// console.log("task 2 running")
// console.log("task 3 running")
// console.log("task 4 running")


console.log("task 1 running")


console.log("task 2 running")




// function addition(a,b, displayNumber()){

// }   


// function restaurant(items, phonenumber, givecalltouser()){
//     restuatnt prepares the orer based on items

//     givecalltouser(phonenumber)
// }


// givecalltouser(){
    
// }

// restaurant(",,...", 65416516)


// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// function myDisplayer(some) {
//   console.log(some)
// }


// myFirst();
// mySecond();


// function myDisplayer(some) {
//   console.log(some)
// }

// function myCalculator(num1, num2, dothislater) {
//   let sum = num1 + num2;
//   dothislater(sum);
// }

// myCalculator(5, 5, myDisplayer);

// setTimeout(() => {
//     alert("you need to sign up now")
// }, 5000);

// console.log("all task finished")



// function dosomething(a,b){
//     // its will do step 1
//     dostep2(){
//         dostep3(){
//             dostep4()
//         }
//     }
    
// }


// function dosomething(){
//     dostep1-> promise me to get back
//     say hello
//     dostep2
//     dostep3
// }


// Create a Promise Object
let  myPromise= new Promise(function(myResolve, myReject) {
  let result = true;

// Code that may take some time goes here

  if (result == true) {
    myResolve("Logged in succesully");
  } else {
    myReject("ID PAssword are incorrect");
  }
});

// Using then() to display result
myPromise.then(x => console.log(x), y => console.log(y));
myPromise.then(()=>console.log("hello"),()=>console.log("not allowed"))





// try {
//     const a = prompt("enter number 1")
//     const b = prompt("enter number 2")
//     if(a == 0 || b==0){
//         throw "bad input"
//     }
//     let result =a+b
//     console.log(result)
// } catch (error) {
//     console.log(error)
// }


fetch('https://jsonplaceholder.typicode.com/users')
.then(y=>y.json()).then(x=>console.log(x))

console.log("ending....")
// https://luxereserve-hotel-api.onrender.com/allPlaces