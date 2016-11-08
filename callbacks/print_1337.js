var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function print1337 (html) {

  /* Write your code here! */

  var letterChange = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'};

  function myLetters(match){
    return letterChange[match];
  }

  var string = /ck|er|you|a|e|l|o|s|t/g;
  console.log(html.replace( string, myLetters));

}

getHTML(requestOptions, print1337);
