function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	drawWeather = function (weather) {
        var template = ''
        var weatherElem = document.getElementById('weather')
		template += `
			<div class="temp">${(Math.ceil((((weather.main.temp)-273.15)*1.8)+32))}</div>
			<div class="conditions">${weather.weather[0].main}</div>
			<div class="location">${weather.name}</div>
        `
        weatherElem.innerHTML = template
    }





	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
		weatherService.getWeather(drawWeather)
	})

}
