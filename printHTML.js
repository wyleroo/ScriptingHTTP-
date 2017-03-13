var printHTML = function(options){
  var stored = '';
  var https = require("https")
  https.get(options, function (response) {
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


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(printHTML(requestOptions));