// {
//   color: { red: 200, green: 8, blue: 21, alpha: null },
//   score: 0.8740235567092896,
//   pixelFraction: 0.44801855087280273
// }


var protoToCssColor = function({red: 200, green: 8, blue: 21, alpha: null }) {
  var redFrac = rgb_color.red || 0.0;
  var greenFrac = rgb_color.green || 0.0;
  var blueFrac = rgb_color.blue || 0.0;
  var red = Math.floor(redFrac * 255);
  var green = Math.floor(greenFrac * 255);
  var blue = Math.floor(blueFrac * 255);

  if (!('alpha' in rgb_color)) {
     return rgbToCssColor(red, green, blue);
  }

  var alphaFrac = rgb_color.alpha.value || 0.0;
  var rgbParams = [red, green, blue].join(',');
  return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
};

var rgbToCssColor = function(red, green, blue) {
 var rgbNumber = new Number((red << 16) | (green << 8) | blue);
 var hexString = rgbNumber.toString(16);
 var missingZeros = 6 - hexString.length;
 var resultBuilder = ['#'];
 for (var i = 0; i < missingZeros; i++) {
    resultBuilder.push('0');
 }
 resultBuilder.push(hexString);
 return resultBuilder.join('');
};