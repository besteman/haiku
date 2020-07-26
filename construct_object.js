const fs = require("fs"); 

const data = fs.readFileSync(
    "./test_file.txt", 
    {
        encoding: "utf8", 
        flag: "r"
    })
    .split("\n");



export function Haiku(data){

    this.firstLine = {};
    this.firstLine.line = data[0];
    this.firstLine.split = data[0].split(" ");

    this.secondLine = {};
    this.secondLine.line = data[1];
    this.secondLine.split = data[1].split(" ");

    this.thirdLine = {}
    this.thirdLine.line = data[2];
    this.thirdLine.split = data[2].split(" ");

}
