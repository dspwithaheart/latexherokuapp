//Test Cors 


// API
// configureAPI(app)
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "localhost:8081/post"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
//   app.get('/post', cors(), function(req, res, next) {
//     // Handle the get for this route
//     // console.log('yoyoi')
//     res.send('GET request to the homepage')
//   });

createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      console.log('n sup')
      if ("withCredentials" in xhr) {
        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true)
        console.log('t sup')
      } else {
        // Otherwise, CORS is not supported by the browser.
        console.log('not sup')
        xhr = null;
      }
      return xhr;
    },
    // Make the actual CORS request.
    makeCorsRequest(url) {
      // This is a sample server that supports CORS.
      // var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

      var xhr = this.createCORSRequest('GET', url);
      if (!xhr) {
        alert('CORS not supported');
        return;
      }

      // Response handlers.
      xhr.onload = function() {
        var text = xhr.responseText;
        // var title = text.match('<title>(.*)?</title>')[1];
        alert('Response from CORS request to ' + url + ': ' + text);
      };

      xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
      };

      xhr.send();
    },