
const { v4: uuidv4 } = require("uuid");
const randomNum = ()=> {
    let numLikes = Math.floor(Math.random() * 100);
    return numLikes;
}


const palettes = [

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#b3ba76', '#787abb', '#afbb15', '#1918ba', '#b8b9ab', '#acacba', '#b0bb37', '#3d3cbb', '#adba0b', '#0506ba']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#9a9b8d', '#9b8e98', '#8d929c', '#8a9b8d', '#9c8f3b', '#9b4182', '#9c9c9c', '#619c27', '#9b945d', '#159b32']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#f1ecfa', '#eafaf7', '#f1fbec', '#f9eeec', '#8b3cfb', '#55fbf0', '#97fbf6', '#85fb17', '#f9bdbd', '#00fbef']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#252525', '#0722d9', '#200bd8', '#1538d8', '#3855da', '#7b8dd9', '#98a4d9', '#b5bdd9', '#cad0d9', '#dadada']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#f74701', '#f75617', '#f26b2f', '#f58356', '#f79a76', '#f7b298', '#f7cbb4', '#f6e0d2', '#f6ede7', '#f7f7f7']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#2e2e2e', '#bdd110', '#abacd1', '#cbd1aa', '#3230cf', '#c4d02e', '#2428d1', '#bed02a', '#5350d0', '#c5d14e']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#c1c823', '#be28c8', '#22c8bf', '#c1c818', '#c149c8', '#a0c7c6', '#03c8c0', '#64c8c3', '#c5bac8', '#c8c8c8']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#52a221', '#6224a2', '#65a23e', '#7347a2', '#18a340', '#383ba2', '#79a35f', '#8363a1', '#40a201', '#5502a3']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors:  ['#fffc5d', '#fefe7b', '#fefe9d', '#fdfed6', '#fdfeef', '#ffffff']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#9896a3', '#94a59d', '#9ca593', '#a59698', '#5a5a5a', '#a5a5a5', '#6ca301', '#8ca562', '#56a57d', '#80a541']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#b4500f', '#3a0cb5', '#11b43e', '#b46211', '#292ab5', '#b5b5b5', '#b39674', '#7658b3', '#47b422', '#b57235']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#dcb925', '#b766e3', '#17e598', '#d7bfe5', '#85e5c3', '#9e24e3', '#e5e5e5']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors:  ['#a90981', '#ac1181', '#ac327f', '#ad2d91', '#ac4b79', '#ac5096', '#ad6b9f', '#ac89a4', '#ad9ea9', '#adadad']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#4431b6', '#46b635', '#b66a43', '#b542b6', '#3572b4', '#b67a0c', '#b4a8b6', '#b6b6b6', '#71b676', '#ae8005']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#74b6b9', '#b88277', '#13b3b7', '#b92e16', '#b9b9b9', '#464646', '#29b1b8', '#b90927', '#42afb9', '#b91f41']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#aa3462', '#3aaa22', '#9d2365', '#555555', '#aaaaaa', '#47aa6b', '#a94b89', '#7faa8f', '#aa4e5b', '#52aa12']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#b523e1', '#36e11c', '#1e1e1e', '#cb82e0', '#89e17c', '#bd42e1', '#50e13c', '#c662e1', '#6de15d']
},

{   _id: uuidv4(),
    isLiked: randomNum(),
    likedByUsers: [],
    creatorId: [0001],
    colors: ['#e8e63e', '#eceddf', '#eeebad', '#c209ee', '#69eed7', '#eee10e', '#edea8d', '#cb2fee'] 
},

]

module.exports = { palettes };