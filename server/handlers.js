"use srtrict";

const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;
const { NEXT_PUBLIC_RAPIDAPI_KEY } = process.env;

const axios = require("axios");

const getRandomePalette = async (req,res) => {
  const options = {
    method: 'GET',
    url: 'https://random-palette-generator.p.rapidapi.com/palette/10/5',
    headers: {
      'X-RapidAPI-Key': '29fe1853ddmsh2af84e8896fb916p1d9debjsn7d07381c747d',
      'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
    }

	};
	// try {

	// 	let response = await axios(options);
	// 	// Send response to the client side
  //   const palette = response.data.data[0].palette;
  //   console.log("response.data" ,response.data )
  //   console.log("1 palette", response.data.data[0].palette)
  //   

	// 	res.status(200).json({status:200, data: palette});
	// } catch (error) {
	// 	console.error("error", error.response);
	// }


axios.request(options).then(function (response) {
  console.log(response.data.data[0].palette);
	const result = response.data.data[0].palette;
  
  res.status(200).json({status:200, data: result});
}).catch(function (error) {
	console.error(error);
});
}

  module.exports = {
    getRandomePalette
};
