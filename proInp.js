// chech file's input & export the results
var captured = '';

//file error checking
var  checkFile = function (fileName, fileObj) {
    fileObj.stat('./exp_tests/' + fileName, function (err, stats) {
      if (err) {
        //check if file exists
        switch (err.code){
          case 'ENOENT':
            console.log('\n' + fileName + '\n [does not exist]');
            break;
        }

        //exit if file encounters error
        return;
      }

      //save file content
      captured = fileObj.readFileSync('./exp_tests/' + fileName, 'utf8');
      var st = captured.split('\n');
      console.log(st);
    });
  };

//file content error checking

//export file content
module.exports = {
  captured: captured,
  checkFile: checkFile,
};
