const axios = require("axios");
const fs = require("fs"); 
const Haiku = require("./construct_object");

require('dotenv').config();

const data = fs.readFileSync(
    "./test_file.txt", 
    {
        encoding: "utf8", 
        flag: "r"
    })
    .split("\n");

const haiku = new Haiku(data)

const keys = Object.keys(haiku)

for (let i = 0; i < keys.length; i = i + 1) {
    // console.log(haiku[keys[i]]);
    for (let j = 0; j < haiku[keys[i]].splitLine.length; j = j + 1) {
        axios({
            "method": "GET",
            "url": `https://wordsapiv1.p.rapidapi.com/words/${haiku[keys[i]].splitLine[j]}/syllables`,
            "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": process.env.WORD_API_KEY,
            "useQueryString": true
            }
            })
            .then((response) => {
                if(response.data.syllables.count != undefined){
                    haiku[keys[i]].syllablesCount += parseInt(response.data.syllables.count);
                }

            })
            .catch((error) => {
              console.log(error)
        })
    }
    console.log(haiku);
}
