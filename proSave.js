var captured = require('./proInp');
var i = 0;
var x = 0;
var y = 0;
var facts = [];
var query = [];
var expr = [];

//file content error checking
/*var isFileNull = function (captured) {
  if (captured == null) {
    conssole.log(captured + ' [is probably empty or null');
  }
};*/

//save info from file
while (captured.captured != null) {
  if (captured.captured[y] === captured.captured[y].match(/[A-Z]/i)) {
    while (captured.captured[y] != '#' || captured.captured[y] != '\n') {
      expr[i] = captured.captured;
      i++;
      y++;
    }
  } else if (captured.captured[y].toString() === '=') {
    while (captured.captured[y] != '#' || captured.captured[y] != '\n') {
      query[x] = captured.captured[y];
      x++;
      y++;
    }
  } else {
    y++;
  }

  console.log(query + ' ' + expr);
}

// TODO: Save info from input
// TODO: save commands and rules

modules.exports = {
  query: query,
  expr: expr,
};
