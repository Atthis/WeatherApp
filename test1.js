// si géoloc activée, envoyer les données lat et long
// si géoloc désactivée, demander d'activer ou proposer d'entrer un lieu (ville + pays)
//
//
//
//
//
//

const apiKey = '9d2a4c1e63d8299886a4e4288c001d68';
let apiResults;

let apiGeoloc;
let cityData;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;

      coordCall(lon, lat);
      // apiCall(long, lat);
    },
    () => {
      alert(
        `Vous avez refusé la géolocalisation, merci de l'activer afin de pouvoir utiliser l'application`
      );
    }
  );
}

function coordCall(lon, lat) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // `http://api.openweathermap.org/geo/1.0/direct?q=${lon},${lat}&limit=2&appid=${apiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apiGeoloc = data;
      console.log(data);
    });
}
