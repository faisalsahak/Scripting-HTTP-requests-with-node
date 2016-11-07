var https = require('https');




function getAndPrintHTML (options) {

  var chunks = '';

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      chunks += data;
    });

    response.on('end', function(){
      console.log('response complete.');
      console.log(chunks);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
