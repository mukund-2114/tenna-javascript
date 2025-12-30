let mydata="hello";
fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then(data=>  {
    mydata = data

})

console.log(mydata)

setTimeout(() => {

    for(let i=0;i<mydata.length;i++){
           const mydiv = document.getElementById("mydiv")
                const mycard = document.createElement("div")
                mycard.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img src=${mydata[i].url} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mydata[i].title}</h5>
                    <p class="card-text">${mydata[i].body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                `
                mydiv.appendChild(mycard)
                    }

}, 1000);

