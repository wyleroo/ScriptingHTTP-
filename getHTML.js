var getHTML = function(options, callback){
  var stored = '';
  var https = require("https")
  https.get(options, function (response) {
   response.setEncoding('utf8');
   response.on('data', function(data) {
     stored += data;
   });
   response.on('end', function(){
     //console.log('Response stream complete');
     return callback(stored);
    });
  });
}

// Callback function.
function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions, printHTML));