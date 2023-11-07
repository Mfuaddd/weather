const form = document.querySelector("form")
form.addEventListener("submit",function (e) {
    e.preventDefault()
    const input = document.querySelector(".input")
    const temp = document.querySelector("#degrees")
    updateUi(input.value,temp.value)
})

async function myFetch(search){
    return data = await fetch("https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=" + search).then(x=>x.json())
}

async function updateUi(search,temp){
    const api = await myFetch(search)
    createCard( api.location.name,
                        api.location.country,
                        api.current[temp],
                        api.current.condition.text,
                        api.current.condition.icon) 
}

function createCard(apiCity,apiCountry,apiWeather,apiSkyP,apiSkyImg) {
    // const box = document.querySelector(".box")
    const city = document.querySelector(".city")
    const country = document.querySelector(".country")
    const weatherForecast = document.querySelector(".weather")
    const skyConditionP = document.querySelector(".skyp")
    const skyConditionImg = document.querySelector(".skyimg")

    city.textContent = apiCity;
    country.textContent = apiCountry;
    weatherForecast.textContent = apiWeather;
    skyConditionP.textContent = apiSkyP;
    skyConditionImg.setAttribute("src",apiSkyImg)
}
