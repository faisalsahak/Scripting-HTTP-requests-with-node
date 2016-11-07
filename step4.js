var https = require('https');



function getHTML (options, callback) {

  var chunks = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      chunks += data;
    });

    response.on('end', function(){
      console.log(chunks);
    });


  });




}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
