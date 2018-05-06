// chech file's input & export the results
module.exports.checkFile = function (fileName, captured, fileObj) {
    fileObj.stat('./exp_tests/' + fileName, function (err, stats) {
      if (err) {
        //check if file exists
        switch (err.code){
          case 'ENOENT':
            console.log('\n' + fileName + ' does not exist');
            break;
        }

        //exit if file encounters error
        return;
      }

      //save file content
      captured = fileObj.readFileSync('./exp_tests/' + fileName, 'utf8');
      console.log(captured);
    });
  };
