// async function quickstart() {
//     // Imports the Google Cloud client library
//     const vision = require('@google-cloud/vision');
  
//     // Creates a client
//     const client = new vision.ImageAnnotatorClient();
  
//     // Performs label detection on the image file
//     const [result] = await client.labelDetection('./img/10888118.jpg');
//     const labels = result.labelAnnotations;
//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//   }
//   quickstart();


  
const myFunc = async () => {
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const fileName = 'Local image file, e.g. /path/to/image.png';

    // Performs property detection on the local file
    const [result] = await client.imageProperties('./img/123.png');

    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    colors.forEach(color => console.log(color));
}
myFunc();