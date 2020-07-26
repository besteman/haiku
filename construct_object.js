module.exports = function Haiku(data){

    this.firstLine = {};
    this.firstLine.line = data[0];
    this.firstLine.splitLine = data[0].split(" ");

    this.secondLine = {};
    this.secondLine.line = data[1];
    this.secondLine.splitLine = data[1].split(" ");

    this.thirdLine = {}
    this.thirdLine.line = data[2];
    this.thirdLine.splitLine = data[2].split(" ");

}
