var fileObj = require('fs');
var reader = require('readline-sync');
var checker = require('./proInp');

var captured = 'empty';
var fileName = '';

//promt for file name
var promUser = function () {
  fileName = reader.question('Enter File Name: ');
};

//open and read file_ then display
var getFile = function (name) {
  checker.checkFile(fileName, captured, fileObj);
};

module.exports = {
  fileName: fileName,
  prompt: promUser,
  fileIn: getFile,
};
