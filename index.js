var http = require('http');

// Create a server object
http
  .createServer(function (req, res) {
    let currentDateTime = new Date(); // Get the current date and time
    res.write('Hi from Cloud\n'); // Write the initial response
    res.write(`Current Date and Time: ${currentDateTime}`); // Display the current date and time
    res.end(); // End the response
  })
  .listen(3000); // The server object listens on port 3000

console.log('Server running on port 3000...');
