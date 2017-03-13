var https = require("https")

var requestOptions = {
host: 'sytantris.github.io',
path: '/http-examples/step1.html'
};

https.get(requestOptions, function getAndPrintHTMLChunks (response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log('Chunk received. Length: ' + data.length);
    console.log(data.toString());
  });
  response.on('end', function(){
    console.log('Response stream complete');
  });
});




// var requestOptions = {
//   host: 'example.com',
//   path: '/'
// };

// // notice that https.get takes a callback with one parameter -
// // response, which is a Stream that represents the HTTP response
// https.get(requestOptions, function (response) {

//   // set encoding of received data to UTF-8
//   response.setEncoding('utf8');

//   // the callback is invoked when a `data` chunk is received
//   response.on('data', function (data) {
//     console.log('Chunk Received. Length:', data.length);
//   });

//   // the callback is invoked when all of the data has been received
//   // (the `end` of the stream)
//   response.on('end', function() {
//     console.log('Response stream complete.');
//   });

// });