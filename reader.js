const fileObj = require('fs');

const captured = '';
var fileNmae = '';

function readFile() {
  console.log('Please Enter File name: ');
}

process.stdin.on('data', function(data) {
  fileNmae = data.toString().trim();
  process.exit();
});

console.log(fileNmae);
readFile();
