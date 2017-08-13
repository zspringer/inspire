// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
var app = {
  controllers: {
    weatherController: new WeatherController(),
    todoController: new TodoController(),
    quoteController: new QuoteController(),
    imageController: new ImageController()
  }
}

function startTime() {
  var today = new Date();
  var locale = today.toLocaleTimeString();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (h >= 13 && h <= 24){
    h = h - 12;
  }
  document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;

}