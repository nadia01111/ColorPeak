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


///random palette generator (using API)
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
    ///remove duplicates using spread and set
    const result = [... new Set(paletteOfTenColors)];
    res.status(200).json({status:200, type: type, data: result});

  }).catch(function (error) {
        console.error(error);
  });
}

///get all saved and generated from the pictures paletts to render on Palettes page

const getAllPalettes = async (req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    const result = await db.collection("palettes_saved").find().toArray();
     if (result) {
        return res.status(200).json({status:200, data: result})
      }
  
      if (result.length<0) {
        return res.status(404).json({status:404, message: "info not found"})
      }
      client.close();
  };



/// save randomly generated palette from NavBar to palettes database
  const savePalette = async (req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    const _id=uuidv4();
    console.log(req.body);
    const {currentPalette, currentUserId} = req.body;
    const addPaletteToSavedPalettes = await db.collection("palettes_saved").insertOne({_id,isLiked:1,likedByUsers:[currentUserId], creatorId:[currentUserId], colors:currentPalette});
    if (addPaletteToSavedPalettes.acknowledged) {
      res.status(200).json({status:200, data:_id, message: "new palette saved"});
    } else {
      return res.status(500).json({
        message: "An unknown error has occurred. Please try your request again."});
   
      }
    };

    ///create collection of users to render user page and liked content
  const createUserMongo = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected")
    const { _id, email, nickname, avatar, savedPalettes, friends } = req.body;
    const ifUserExist = await db.collection("usersMongo").findOne({email});
    console.log(ifUserExist);
    if (ifUserExist) {
      res.status(200).json({status:200, data:ifUserExist._id, message:"user exists"});
    } else {
      const addUser = await db.collection("usersMongo").insertOne({_id, email, nickname, avatar, savedPalettes, friends});
    if (addUser.acknowledged) {
      res.status(200).json({status:200, data:_id, message: "user created"});
    } else {
      return res.status(500).json({
        message: "An unknown error has occurred. Please try your request again.",
    });
     }}
    };

  ///get user to render user page
  const getUserbyId = async (req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    const _id = req.params.id;
    const currentUser = await db.collection("usersMongo").findOne({_id});
    console.log(currentUser);

    res.status(200).json({status:200, data:currentUser});

   };

  module.exports = {
    getRandomePalette,
    savePalette,
    getUserbyId,
    getAllPalettes,
    createUserMongo,
};