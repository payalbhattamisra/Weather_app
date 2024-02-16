const apikey="48c67dfeac4eb6ac6cced352d98a6103";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

//"https://api.openweathermap.org/data/2.5/weather?q=bangaloreS&appid=48c67dfeac4eb6ac6cced352d98a6103&units=metric"
async function checkweather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{ 
 //async await for url
//print
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png" ; 
}else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png" ;
}else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png" ;
}else if(data.weather[0].main=="Humidity"){
    weatherIcon.src="images/humidity.png" ;
}else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png" ;
}else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png" ;
}else if(data.weather[0].main=="Search"){
    weatherIcon.src="images/search.png" ;
}else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png" ;
}else if(data.weather[0].main=="Wind"){
    weatherIcon.src="images/wind.png" ;
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
}
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
 