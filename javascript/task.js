// task 15
// i have 2 array and i want to check whether the values of each 
// array when combined together equals to second array
// e.g word1=["ab","c"] word2 = ["a","bc"] true
// ["a","b","c"] ["ab","c"]

let word1 = ["ab","c","de"]
let word2 = ["a","bcd","e"]

let combine1 = ""
let combine2 = ""

// for(let i= 0 ;i < word1.length; i++){
// //    console.log(word1[i])
//     combine1+= word1[i]
// }
// for(let i= 0 ;i < word2.length; i++){
// //    console.log(word2[i])
//     combine2+= word2[i]
// }


// console.log(combine1)
// console.log(combine2)
// if(combine1 == combine2){
//     console.log("they are the same")
// }



// combine1 = word1.join("")
// combine2 = word2.join("")


// console.log(combine1)
// console.log(combine2)


function checker(word1,word2){
    // combine1 = word1.join("")
    // combine2 = word2.join("")
    // if(combine1 == combine2){
    //     return true
    // }
    // else{
    //     return false
    // }
    // return combine1 == combine2
    return word1.join("") == word2.join("")

}

const hi = checker(word1,word2)
// console.log(hi)


// task 16
// create a array that can have multiple values but can only be 
// x++ , x-- ,++x, --x and output should be final value of x 
// default value start from 0
// e.g ['x++','x++','x--'] output 1


let x = 0
const arr = ["++x","x--","x++","++x"]

for(i= 0;i< arr.length;i++){
    console.log(arr[i])
    // if(arr[i] == "x++" || arr[i]=="++x"){
    //     x++
    // }
    // else{
    //     x--
    // }
    if(arr[i].includes("++")) x++;
    else x--
}

console.log(x)