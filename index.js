
const getData = () => {
  const cityName = document.querySelector('#cityname').value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2c88866fe856a242bfd0983d64aff2bf&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {

      document.querySelector("#cityoutput").innerText = `Weather in ${data.name}`;
      document.querySelector('#description').innerText = data.weather[0].description;;
      const todayTemp = data.main.temp.toFixed();
      document.querySelector("#temp").innerText = `Current temp: ${todayTemp}°`
      const maxTemp = data.main.temp_max.toFixed();
      document.querySelector("#max").textContent = `Max: ${maxTemp}°`;
      const minTemp = data.main.temp_min.toFixed();
      document.querySelector("#min").innerText = `Min: ${minTemp}°`;
      const wind = data.wind.speed;
      document.querySelector("#wind-speed").innerText = `Wind speed: ${wind} km/h`
      const icon = data.weather[0].icon;
      document.querySelector('.weather-icon').innerHTML = `<img src="icons/${icon}.png">`;


    });

};

const weatherCard = document.querySelector('.weather-card').style.display = "none";

document.querySelector(".btn").onclick = function () {
  document.querySelector('.weather-card').style.display = "block";
}


const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {

  let cityname = document.querySelector('#cityname');
  if (cityname.value == '') {
    alert('please enter a city!');
  } else {
    event.preventDefault();
    getData();
  }


});
