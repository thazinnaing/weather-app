
const weatherCardContainer=document.getElementsByClassName("weather-cards")[0];
for(let i=0; i<5; i++){
    const card=document.createElement("div");
    card.classList.add("card");

    const date=document.createElement("h3");
    date.append("( ____ )");

    const icon=document.createElement("img");
    icon.src="https://openweathermap.org/img/wn/10d@2x.png";

    const temp=document.createElement("h5");
    temp.append("Temp: _&degC");

    const wind=document.createElement("h5");
    wind.append("Wind: _M/S");

    const humidity=document.createElement("h5");
    humidity.append("Humidity: _%");

    card.append(date, icon, temp, wind, humidity);
    weatherCardContainer.append(card);
}

const searchInput= document.getElementsByClassName("search-input")[0];
const searchBtn=document.getElementsByClassName("searchBtn")[0];

searchBtn.addEventListener("click", getCity)


