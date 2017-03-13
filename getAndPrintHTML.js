
var getAndPrintHTML = function(){
  var https = require("https")
  var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
  };
  var stored = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
     stored += data;
    });
    response.on('end', function(){
      console.log('Response stream complete');
      console.log(stored);
    });
  });
}


getAndPrintHTML();
