const inputElement = document.getElementById("inputField")
const errorfield = document.getElementById("errorid")

const btnClick = () =>{
    // console.log("button clicked")
    // const heading1 = document.getElementsByTagName('h1')[0]
    // heading1.style.color = "#FFA239"
    let fname = inputElement.value
    if(fname.length < 8){
        // alert("please enter more than 8")
        // inputElement.value = ''
        errorfield.innerText = "Enter more than 8 character"
        errorfield.style.color = "red"
    }
    // errorfield.innerText=''
    
}



function heading2(){
    console.log("hi")
}



function textChange(){
   
    
}


// const fruits = ["apple", "orange", "cherry"];

// fruits.forEach(fruit => {
//     fruit+="hii"
// })

// console.log(fruits)
// function displayFruit(name){
//     console.log(name)
// }


const allusers = [
    {
        fname:"mukund",lname:"kapadia",
        url:'https://picsum.photos/id/237/200/300'
    },
    {
        fname:"hell0",lname:"world",
         url:'https://picsum.photos/id/258/200/300'
        
    },
    {
        fname:"john",lname:"does",
         url:'https://picsum.photos/id/263/200/300'
    }
    
]

const userDiv = document.getElementById("usersId")



allusers.forEach(user=>{
    console.log(user)
    // userDiv.innerHTML= user.fname
    const h3element = document.createElement("h3")
    const myimage = document.createElement("img")
    const mydiv = document.createElement("div")



    h3element.innerText = user.fname
    myimage.src = user.url
    userDiv.appendChild(myimage)
    userDiv.appendChild(h3element)
    // console.log(h3element)
})
