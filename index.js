const axios = require("axios");

require('dotenv').config();

const firstLine = "Hello There dude"

const splitLine = firstLine.split(" ")

console.log(splitLine);

for(let i = 0; i < splitLine.length; i = i + 1) {

    axios({
        "method": "GET",
        "url": `https://wordsapiv1.p.rapidapi.com/words/${splitLine[i]}/syllables`,
        "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": process.env.WORD_API_KEY,
        "useQueryString": true
        }
        })
        .then((response)=>{
          console.log(response.data.syllables.count)
        })
        .catch((error)=>{
          console.log(error)
    })

}
