const apiKey = "c440ed9a20259d9dea2aa215b5c68a3d"

/* function appel API OpenWheater (city en paramètres) */

let apiCall = function (city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&lang=fr&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.message == 'city not found'){
            document.querySelector('#city').innerHTML = 'Ville introuvable'
            document.querySelector('#temp').innerHTML = ''
            document.querySelector('#humidity').innerHTML = '' 
            document.querySelector('#wind').innerHTML = '' 
            document.querySelector('#content').innerHTML = ''
        } else {
            document.querySelector('#city').innerHTML = data.name
            document.querySelector('#temp').innerHTML = '<i class="fa-solid fa-temperature-half pb-2"></i>' + data.main.temp + '°'
            document.querySelector('#humidity').innerHTML = '<i class="fa-solid fa-droplet pb-2"></i>' + data.main.humidity + '%'
            document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind py-2"></i>' + data.wind.speed + ' km/h'
            document.querySelector('#content').innerHTML = data.weather[0].description
        }
    })
    .catch(err => console.log(err))
}

/* Ecouteur d'évènements au submit form */

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let city = document.querySelector('#ville').value
    apiCall(city);
    
})

/* Appel de la function (Appel API) avec city par défault */

apiCall('Fontainebleau')