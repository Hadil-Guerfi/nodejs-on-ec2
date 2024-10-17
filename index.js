var http = require('http');

// Create a server object
http
  .createServer(function (req, res) {
    let currentDateTime = new Date(); // Get the current date and time
    console.log(currentDateTime)
    res.write('Hi from Cloud\n'); // Write the initial response
    res.write(`Current Date and Time: ${currentDateTime}`); // Display the current date and time
    res.end(); // End the response
  })
  .listen(80); // The server object listens on port 80

console.log('Server running on port 80...');
