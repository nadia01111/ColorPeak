"use srtrict";

const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const { NEXT_PUBLIC_RAPIDAPI_KEY } = process.env;

const axios = require("axios");

const getRandomePalette = async (req,res) => {
  const options = {
    method: 'GET',
    url: 'https://random-palette-generator.p.rapidapi.com/palette/1/10',
    headers: {
      'X-RapidAPI-Key': '29fe1853ddmsh2af84e8896fb916p1d9debjsn7d07381c747d',
      'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
    }
	};
	

  axios.request(options).then(function (response) {
    const type = response.data.type;
    const paletteOfTenColors = response.data.data[0].palette;
    console.log("10",response.data.data[0].palette);
    ///remove duplicates using spread and set
    const result = [... new Set(paletteOfTenColors)];
      console.log("unique",result);
      res.status(200).json({status:200, type: type, data: result});

  }).catch(function (error) {
        console.error(error);
  });
}



const getAllPalettes = async (req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    const result = await db.collection("palettes").find().toArray();
   

    if (result) {
        return res.status(200).json({status:200, data: result})
      }
  
      if (result.length<0) {
        return res.status(404).json({status:404, message: "info not found"})
      }
      client.close();
  };

const test = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("ColorPeak");
  await client.connect();
  console.log("connected");
  const result = await db.collection("users").find().toArray();
   console.log(result);
  res.status(200).json({status:200, data:result});
  client.close();
}




  const savePalette = async (req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    console.log(req.body);

    //working! finish after user conext
  };
  
  const getUserbyId = async (req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    console.log(req.body);
  }
  module.exports = {
    getRandomePalette,
    savePalette,
    test,
    getUserbyId,
    getAllPalettes,
};
