https://openweathermap.org/weather-conditions#Icon-list -> liste des icones

API météo : https://api.openweathermap.org/data/2.5/onecall?lat=LATITUDE&lon=LONGITUDE&exclude=minutely&units=metric&lang=fr&appid=CLE_API
-> Infos : https://openweathermap.org/api/one-call-api

API Geolocalisation : http://api.positionstack.com/v1/forward?access_key=YOUR_ACCESS_KEY&query=YOUR_QUERY_HERE&language=fr

json countries source : https://github.com/stefangabos/world_countries

https://codepen.io/raubaca/pen/PZzpVe?editors=1100


## Mécanismes localisation :
2 branches possibles : géoloc ou formulaire
1- Géoloc : 
    - récupération des coordonnées via géoloc
    - envoi des coordonnées dans l'API reverse geoloc
    - 