const key = "d66a70f6c2960de613aae17abe518df9";
const container = document.querySelector(".container-meio");
const city = document.querySelector(".city");
const search_icon = document.querySelector(".search-icon");


function ScreenData(dados) {
    document.querySelector(".city").innerHTML = dados.name;
    document.querySelector(".wheather").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".text-weather").innerHTML = dados.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function SearchCity(cidade) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
        );

        if (!response.ok) {
            throw new Error("Cidade não encontrada");
        }

        const dados = await response.json();
        container.style.display = "block";
        ScreenData(dados);
    } catch (error) {
        container.style.display = "none";
        city.style.display = "block";
        city.innerHTML = "Cidade Não Encontrada";
    }
}


function clickSearch() {
    let cidade = document.querySelector(".input-city").value.trim();

    if (cidade) {
        SearchCity(cidade);
    } else {
        city.style.display = "block";
        city.innerHTML = "Por favor, insira uma cidade";
    }
}


search_icon.addEventListener("click", clickSearch);
