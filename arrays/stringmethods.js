// console.log()


let myconsole = {
    name:"mukund",
    log : function(){
        console.log("hello loggging")
        return "thanks"
    }
}

console.log(myconsole.name) // string- mukund
console.log(myconsole.log())




let str = "hello"
// console.log(str.length)


// function mylength(str1){
//     let count =0
//     let index = 0

//     // console.log(str1[index])
//     while(str1[index] !== undefined){
//         console.log("character", str1[index])
//         count++
//         index++
//     }
//     return count
// }

// let cm = mylength("hello")
// console.log(cm)



let myname = "Mukund"

console.log(myname.length)

console.log(myname.charAt(0))

console.log(myname.charCodeAt(0))

console.log(String.fromCharCode(109))

let surname = "kapadia"

console.log(myname + surname)
console.log(myname.concat(surname))


console.log(myname.toLowerCase())



let user = "muk8nd"

console.log(user.split(" "))


let str3 = "Apple, Banana, Kiwi";
let part = str3.substring(7, 13);
console.log(part)


let text = "Please visit Microsoft! hey Microsoft";
let newText = text.replaceAll("Microsoft", "W3Schools");



console.log(user.includes(""))

