

  
const colorRecognize = async () => {
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
// colorRecognize();

module.exports = {
    colorRecognize
};
