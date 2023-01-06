let searchInput=document.querySelector('.search-bar');
let btn=document.querySelector('.btn');

btn.addEventListener('click',viewWeather);
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter'){
    viewWeather();
  }});

function viewWeather(){
  let city=searchInput.value.trim();
  let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=90b8f53ffbf8b01a04664457e9f479dd`;

  fetch(apiURL)
    .then((res)=>{
        if(res.ok){
            return res.json();
        } 
    })
    .then((data)=>{
        displayWeather(data);
    })
  
}

function displayWeather(data) {
  if (data == null) {
    // alert("No weather found.");
    // throw new Error("No weather found.");
  } else {
    let weather=document.querySelector('.weather');
    weather.classList.remove('dNone');
    let city = data.name;
    let icon = data.weather[0].icon;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let speed = data.wind.speed;
    document.querySelector(".city").innerText = "Weather in " + city;
    document.querySelector(".icon").src =`https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");

  }
}
