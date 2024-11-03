const key = "d66a70f6c2960de613aae17abe518df9";
const city_input = document.querySelector(".input-city").value;
const container = document.querySelector(".container-meio");
const city = document.querySelector(".city");
const search_icon = document.querySelector(".search-icon");


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

search_icon.addEventListener("click",()=>{
   
    console.log(city.value)


    if(city === "undefined"){


        city.innerHTML = "cidade não encontrada";

    }else{
        container.style = "display: block";
        city.style = "display: block";

    };



});



function ScreenData(dados){
    document.querySelector(".city").innerHTML = dados.name;
    document.querySelector(".wheather").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".text-weather").innerHTML = dados.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function SearchCity(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json());

    ScreenData(dados)

}


function clickSearch(){

    let cidade = document.querySelector(".input-city").value;
    
    SearchCity(cidade)
}

