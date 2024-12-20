let input = document.getElementById("input");
let info = document.getElementById("info");

async function getWeather() {
    let city = input.value;
    let url = `https://api.weatherapi.com/v1/current.json?key=8d5bca67f13b43238c101826240102&q=${city}&aqi=no`
    try {
        let data = await fetch(url);
        let result = await data.json();
        console.log(result.current.condition.text);
        info.innerHTML = `
        <h2>${result.location.name}</h2>
        <h3>Temperature: ${result.current.temp_c} deg celcius</h3>
        <h3>Condition: ${result.current.condition.text}</h3>
        <img src="${result.current.condition.icon}" alt="weather">
        `
    } catch (error) {
        
    }
}
  