var getHTML = function(options, callback){
  var stored = '';
  var https = require("https")
  https.get(options, function (response) {
   response.setEncoding('utf8');
   response.on('data', function(data) {
     stored += data;
   });
   response.on('end', function(){
     return callback(stored);
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

module.exports = (getHTML(requestOptions, printHTML));