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
    // console.log(arr[i])
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


// Task 12   give it last priority
// parenthesis Checker
// "([{}])" true
// "()[]{}" true
// "({)}[]" false

function parethesisChecker(str){
    let arr = []
    let brackets = {
        '{':'}',
        '(':')',
        '[':']',

    }

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        // console.log(element)
        if(element == '[' || element == '(' || element == '{'){
            arr.push(element)
        }
        else{
            const lastElement = arr.pop() // {
        //    switch (element) {
        //     case '}':
        //         if(lastElement != '{'){
        //             console.log("wrong bracket")
        //             return false
        //         }
        //         break;
        //     case ']':
        //         if(lastElement != '['){
        //             return false
        //         }
        //         break;
        //     case ')':
        //         if(lastElement != '('){
        //             return false
        //         }
        //         break;
           
        //     default:
        //         break;
        //    }
        console.log("current element",element)
        console.log(brackets[lastElement])

        if(element != brackets[lastElement]){
            console.log("not matching")
            return false
        }
    }
    }
    return arr.length
    
}

function parethesisChecker1(str){
    // "([{}])" true
    while(true){
        if(str.length==0){
            break;
        }
        str = str.replace('{}',"")
        str = str.replace('()',"")
        str =  str.replace('[]',"")

        
    }
    console.log("str",str)
}

console.log(parethesisChecker1("([{}])"))




const num1 = [1,2,3,4,5,6,7]

for (const element of num1) {
    console.log(element)
}

for (const key in num1) {
    
    console.log(key)
}