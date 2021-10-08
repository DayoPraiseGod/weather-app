

let weather = {

	apiKey: "4da2a401e5e0fdb9416f9b91951999de",

	getWeather: function(city) {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
			).then((response) => response.json())
		.then((data) => this.showWeather(data));

	},

	showWeather: function(data) {
		const { name } = data;
		const { temp, humidity } = data.main;
		const { description, icon } = data.weather[0];
		const { speed } = data.wind;
		console.log(name, temp, humidity, description, icon, speed);
		document.querySelector('#place').innerText = "Weather for " + name;
		document.querySelector('#temp').innerText = Number((temp - 273)).toFixed(1) + "°C";
		document.querySelector('#icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
		document.querySelector('#description').innerText = description;
		document.querySelector('#humidity').innerText = "Humidity: " + humidity + "%";
		document.querySelector('#speed').innerText = "Wind Speed: " + speed + "km/h";
	},

	search: function() {
		let cityName = document.querySelector(".search-field").value;
		this.getWeather(cityName);
	}
};


function searchWeather() {
	weather.search();
	document.querySelector("body").style.backgroundImage = "url(./images/2.jpg)";
}


// document.querySelector("search-btn").addEventListener("click", function() {
// 	weather.search();
// 	// document.querySelector("body").style.backgroundImage = "url(./images/2.jpg)";
// });


