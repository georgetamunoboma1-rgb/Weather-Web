const APIKEY = "c143c3421704f2787cfa49a9ad6f20af",
    URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

    const searchBox = document.getElementById('city');
    const searchBtn = document.getElementById('btn');


    async function checkWeather (city = 'london'){
        const res = await fetch(URL + city + `&appid=${APIKEY}`);
        let data = await res.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }

    searchBtn.addEventListener("click", () =>{
        checkWeather(searchBox.value)
    })

    searchBox.addEventListener("click", (e)=>{
        if(e.key === "Enter"){
            checkWeather(searchBox.value)
        }
    })

    checkWeather();