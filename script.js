const key = "d66a70f6c2960de613aae17abe518df9";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function ScreenData(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = dados.name;
    document.querySelector(".wheather").outerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".text-weather").innerHTML = dados.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function SearchCity(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    ScreenData(dados)

}


function clickSearch(){

    let cidade = document.querySelector(".input-city").value;
    
    SearchCity(cidade)
}