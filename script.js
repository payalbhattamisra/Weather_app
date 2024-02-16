const apikey="48c67dfeac4eb6ac6cced352d98a6103";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

//"https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=48c67dfeac4eb6ac6cced352d98a6103&units=metric"
async function checkweather(){
    const response=await fetch(apiUrl+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
}
checkweather();