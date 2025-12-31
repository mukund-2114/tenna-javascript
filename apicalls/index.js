async function sayHello(){
    const data = await fetch('https://fakestoreapi.com/products')
    const res = await data.json()
    // console.log(res)
    for(let i=0;i<res.length;i++){
           const mydiv = document.getElementById("mydiv")
                const mycard = document.createElement("div")
                mycard.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img src=${res[i].image} class="card-img-top" alt="..." width="200">
                <div class="card-body">
                    <h5 class="card-title">${res[i].title}</h5>
                    <p class="card-text">${res[i].price}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                `
                mydiv.appendChild(mycard)
                    }
}

sayHello()

