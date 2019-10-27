// Fonction appelée lors du click du bouton
function start(city) {

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(city);


    apiWeather
        .getThreeDayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data.list;

            for(let i=0; i<4; i++) {

                // On récupère l'information principal
                const main = data[i].weather[0].main;
                const description = data[i].weather[0].description;
                const icon = apiWeather.getHTMLElementFromIcon(data[i].weather[0].icon);
                const temp = data[i].temp.day;

                // Modifier le DOM
                document.getElementById('day'+i+'-forecast-main').innerHTML = main;
                document.getElementById('day'+i+'-forecast-more-info').innerHTML = description;
                document.getElementById('icon'+i+'-weather-container').innerHTML = icon;
                document.getElementById('day'+i+'-forecast-temp').innerHTML = `${temp}°C`;
            }

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
            alert("ville non-trouvee, reessayer");
        });
}

//Fonction appelée lors de l'actualisation de la ville
function inputVille() {

    //Récupérer la valeur de l'input
    const cityInput = document.getElementById('city-input').value;

    // Vérifier que l'input n'est pas vide
    cityInput === "" ? alert("Veuillez indiquer une ville !") : start(cityInput);
}
