

  
const colorRecognize = async () => {
    res.status(200).json({status:200, message:"ok"});
    console.log(req.body);
  h
    const url = "";

    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

   
    const fileName = url;

    // Performs property detection on the local file
    const [result] = await client.imageProperties(url);

    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    colors.forEach(color => console.log(color));
   

}
// colorRecognize();

// const test = async (req,res) => {
//     res.status(200).json({status:200, message:"ok"});
// }
module.exports = {
    colorRecognize,
    // test
};
