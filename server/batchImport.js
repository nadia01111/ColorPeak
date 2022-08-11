const { MongoClient } = require("mongodb");

const {images } = require("./data/images")

require("dotenv").config("./");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const batchImport = async () => {
console.log(MONGO_URI);
const client = new MongoClient(MONGO_URI, options);

    // try {
    //     await client.connect();
    //     const db = client.db("ColorPeak");
    //     console.log("connected");
    //     const insertImgs = await db.collection("pictures").insertMany(images);
    //     console.log(insertImgs)
    
    //    } catch (err) {
        
    //      console.log(err.stack);
    //    } finally {

    //        client.close();
    //    }


}

batchImport();
