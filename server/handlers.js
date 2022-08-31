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
    const result5colors = paletteOfTenColors.slice(0,5);
    res.status(200).json({status:200, type: type, data: result5colors});
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

  

    ///create collection of users to render user page and liked content
  const createUserMongo = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected")
    const { _id, email, nickname, avatar, savedPalettes, friends } = req.body;
    const ifUserExist = await db.collection("usersMongo").findOne({email});
    // console.log(ifUserExist);
    if (ifUserExist) {
      res.status(200).json({status:200, data:ifUserExist, message:"user exists"});
    } else {
      const addUser = await db.collection("usersMongo").insertOne({_id, email, nickname, avatar, savedPalettes, friends});
    if (addUser.acknowledged) {
      res.status(200).json({status:200, data:{_id, email, nickname, avatar, savedPalettes, friends}, message: "user created"});
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
    // console.log(currentUser);

    res.status(200).json({status:200, data:currentUser});

   };


/// handler to save palette randomly generated by user. it will be saved to user document in Mongo DB as well a to all created palettes colletion. If user "unlike" this palette he will delete it from his collection butt it will stay at Palettes_saved collection.

   const saveGeneratedPalette = async (req,res) => {

    const client = new MongoClient(MONGO_URI, options);

    try{
    const db = client.db("ColorPeak");
    await client.connect();
    console.log(" PATCH connected");

    const paletteToSave = req.body.currentPalette;
    const userId = req.body.currentUser._id;
    const isSaved = req.body.isSaved;
    const _id = req.body._id;
    const usersToAdd = [userId];
    // console.log("paletteToSave", paletteToSave);
    let checkUpd = null;
    let addPaletteToCollection = {acknowledged:true};
    
    ///if user presed SAVE buttton then Palette saves in this users document but also in palettes_saved collection
    if (isSaved === false) {
       addPaletteToCollection = await db.collection("palettes_saved").insertOne({_id,palette:paletteToSave, isLikedBy:usersToAdd});
       checkUpd = await db.collection("usersMongo").updateOne(
        {_id: userId},
        {$push: { savedPalettes:_id}}
        ) 
      }
      ///if user wants to remove palette from his saved palettes
      if (isSaved === true) {
        checkUpd = await db.collection("usersMongo").updateOne(
          {_id: userId},
          {$pull: { savedPalettes: _id}}
          ) 

      }
      // console.log(checkUpd);
      
        if (addPaletteToCollection.acknowledged && checkUpd.modifiedCount ) {
          res.status(200).json({status:200, data:_id, message: "palette saved"});
        } else {
          res.status(401).json({status:401, message: "error"})
        }
      } catch (err) {
        console.log(err.stack)
        res.status(500).json({status:500, message: err.stack})
      } finally {
        client.close();
      console.log("disconnected");
      }
      
   }

   ///handler to find pallettes which were saved by current user to render them on his page

  const getSavedPalettes = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
      const db = client.db("ColorPeak");
      await client.connect();
      console.log(" getSavedPalettes connected");
      const _id = req.params.id;
      // console.log(_id);

        const result = await db.collection("palettes_saved").find(
          { isLikedBy: { $in: [_id] } }).toArray();

      // console.log(result);
      res.status(200).json({status:200, data: result, message: "found"});
    } catch (err) {
      console.log(err.stack)
      res.status(500).json({status:500, message: err.stack})
    } finally {
    client.close();
    console.log("disconnected");
    }
  }

  const savePaletteFromPicture = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
      const db = client.db("ColorPeak");
      await client.connect();
      console.log("savePaletteFromPicture connected");
      console.log(req.body);
      const _id = req.body._id;
      const palette = req.body.palette;
      const isLikedBy = [req.body.isLikedBy];
      const savePalette = await db.collection("palettes_saved").insertOne({_id,palette, isLikedBy});
      const addPaletteToUser =  await db.collection("usersMongo").updateOne(
        {_id: isLikedBy},
        {$pull: { savedPalettes: _id}}
        ) 
      
      res.status(200).json({status:200, data:_id , message: "new palette saved"});
  } catch (err) {
    console.log(err.stack)
    res.status(500).json({status:500, message: err.stack})
  } finally {
  client.close();
  console.log("disconnected");
  }
};

const likePalette = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  try{
    const db = client.db("ColorPeak");
    await client.connect();
    console.log("connected");
    console.log(req.body);
    const {  _id, currentUser, isLiked } = req.body;
    if (isLiked === false) {
      const addLikeToPaltte =  await db.collection("palettes_saved").updateOne(
        {_id: _id},
        {$push: { isLikedBy: currentUser}})
      } else {
      const removeLikeFromPaltte =  await db.collection("palettes_saved").updateOne(
          {_id: _id},
          {$pull: { isLikedBy: currentUser}})
      }
  }catch (err) {
    console.log(err.stack)
    res.status(500).json({status:500, message: err.stack})
  } finally {
    client.close();
    console.log("disconnected");
}
};
 
  module.exports = {
    getRandomePalette,
    getUserbyId,
    getAllPalettes,
    createUserMongo,
    saveGeneratedPalette,
    getSavedPalettes,
    savePaletteFromPicture,
    likePalette
    };