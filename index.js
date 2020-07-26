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

console.log(haiku);

const keys = Object.keys(haiku)

console.log(keys);

for (let i = 0; i < keys.length; i = i + 1) {
    // console.log(haiku[keys[i]]);
    for (let j = 0; j < haiku[keys[i]].splitLine.length; j = j + 1) {
        console.log(haiku[keys[i]].splitLine[j]);
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
                console.log(response.data);
                haiku[keys[i]].syllablesCount += response.data.syllables.count;

            })
            .catch((error) => {
              console.log(error)
        })
    }
}

console.log(haiku);
