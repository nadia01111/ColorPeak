
# ColorPeak web app

![logo](https://github.com/nadia01111/Final-Project/raw/master/Final-Project/client/src/assets/logo.png)

<!-- <img src='frontend/src/assets/screenshots/header.png' style='width:100%' /> -->
<img src='client/src/assets/logo.png' style='width:100%' />

---
## About this app

This app is a color palette generator. The user could upload an image and receive the primary colors of this picture as a color palette. He also could get a randomly generated 5-colors palette. Palettes are stored in the database and can be viewed and saved by logged users. 

## Technologies used

Front end: React.js

Back end: 
1. Node.js
2. MongoDB for data storage
3. Auth0 API for user authentication
4. Google vision API for image analysis
5. Pexels API for random palette generation

## Home page

The main page has a navigation bar and immediately gives the user a randomly generated color palette. Logged in or not, the user may endlessly press the space par and get more and more palettes. 

## Extract the palette from the image

If the user has an image for the palette reference, he could upload it, press the «Generate palette» button, and enjoy the generated palette. 