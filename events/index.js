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
