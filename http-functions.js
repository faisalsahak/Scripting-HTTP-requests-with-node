var https = require('https');


module.exports = function getHTML (options, callback) {
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
};
