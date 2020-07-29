module.exports = function Haiku(data){

    this.firstLine = {};
    this.firstLine.line = data[0];
    this.firstLine.splitLine = data[0].split(" ");
    this.firstLine.syllablesCount = 0

    this.secondLine = {};
    this.secondLine.line = data[1];
    this.secondLine.splitLine = data[1].split(" ");
    this.secondLine.syllablesCount = 0

    this.thirdLine = {}
    this.thirdLine.line = data[2];
    this.thirdLine.splitLine = data[2].split(" ");
    this.thirdLine.syllablesCount = 0

}
