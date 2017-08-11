function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	drawWeather = function (weather) {
        var template = ''
        var weatherElem = document.getElementById('weather')
		template += `
		<div class="row">
        <div class="col-xs-12">
			<div class="temp">${weather.main.temp}</div>
			<div class="conditions">${weather.weather[0].main}</div>
			<div class="location">${weather.name}</div>
		</div>
		</div>
        `
        weatherElem.innerHTML = template
    }





	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
		weatherService.getWeather(drawWeather)
	})

}
