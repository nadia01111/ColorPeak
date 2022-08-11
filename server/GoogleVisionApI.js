

  
const colorRecognize = async (req,res) => {
    res.status(200).json({status:200, message:"ok"});
    console.log(req.body);
    const url = "http://localhost:3000/c56099a5-bebe-4019-b6ba-d3d73d73876f";

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

const test = async (req,res) => {
    res.status(200).json({status:200, message:"ok"});
}
module.exports = {
    colorRecognize,
    test
};
