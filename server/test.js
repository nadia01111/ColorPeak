const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/10/3',
  headers: {
    'X-RapidAPI-Key': '29fe1853ddmsh2af84e8896fb916p1d9debjsn7d07381c747d',
    'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});