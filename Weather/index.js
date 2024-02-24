var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "21bd3b35bf01b65daa859e9d5e6aa352"
function conversion(val) {
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())            //it comes in json file then our data should be handled in json format only

        .then(data =>                       //many data would come from it so which data to be targeted is handled one by one
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`      //To send data to HTML using the variables defined in the beginning
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`
        }
        )

        .catch(ERR => alert('You Entered Wrong City Name'))
})