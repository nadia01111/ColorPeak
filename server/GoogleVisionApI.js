const fs = require('fs');


const items = require("./img.json");

  
const colorRecognize = async (req,res) => {
 
  const argument= items.imageSrc;

  const decodeBase64Image = (dataString) => {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};
       if (matches.length !== 3) {
    return new Error('Invalid input string');
      }    response.type = matches[1];
      // const buff = Buffer.from(items.imageSrc, "utf-8");
      response.data = Buffer.from(matches[2]);
      console.log(matches[2])
       return response;
}

const  decodedImg = decodeBase64Image(argument);
console.log(decodedImg);
// var imageBuffer = decodedImg.data;
// var type = decodedImg.type;
// var extension = mime.extension(type);
// var fileName =  "image." + extension;
// try{
// fs.writeFileSync(".tmp/uploads/" + fileName, imageBuffer, 'utf8');
// }  catch(err){
// console.error(err)  } 
    // var imageFile = fs.readFileSync('/Users/nadi/Documents/concordia-bootcamps/Final-Project/server/images.jpeg');
    // var encoded = Buffer.from(items.imageSrc).toString('base64');
    // const buff = Buffer.from(items.imageSrc, "utf-8");
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs property detection on the local file
    const [result] = await client.imageProperties(decodedImg);

    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    colors.forEach(color => console.log(color));
   

}
// colorRecognize();

module.exports = {
    colorRecognize,
};
