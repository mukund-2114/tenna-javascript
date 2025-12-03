let countStudents=0 // 5

for(i = 1;i< 15;i++){
   
    console.log("current student: ",i)
   console.log("total studnet so far",countStudents)
    
   if(countStudents == 5){
    console.log("max hired", countStudents)
    break;
   }
   
   if(true){
       console.log("student is ok with id",i)
    countStudents++
    console.log("hired students: ", countStudents)
    console.log("      ")
   }
    
   
}

let inputnumber = prompt("enter the number 2")

while(true){
    if(inputnumber == "2"){
        console.log("thank you for entering2")
        break;
    }
    
    console.log("helo")
}