const axios = require('axios');

/* function getCountry() {
  axios
    .get('https://restcountries.com/rest/v2/all')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
getCountry(); */

async function getCountry() {
  const countryList = await axios.get('https://restcountries.com/rest/v2/all');
  console.log(countryList);
}
getCountry();
