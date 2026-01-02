console.log("weather app")

const API_KEY = "xxxxxxxxx put your api key here xxxx"

const city = document.getElementById("weatherInput")
const tempOutput = document.getElementById("temp")



async function getWeatherDetais(){
    console.log("fetching weather details.....")
   
    if(city.value == ""){
        alert("Please enter a city name")
        throw new Error("City is empty")
    }

    try {
    const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`)
    const response = await data.json()
    const temperature =response.main.temp
    console.log("Data received", response)
    // alert(`Weather of ${city.value} is ${temperature}`)
   tempOutput.innerText = `Weather of ${city.value} is ${temperature}`
    } catch (error) {
        console.log(error)
    }
}


