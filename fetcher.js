const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
console.log(args);

const URL = args[0];
const path = args[1];


request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const content = body; // Print the HTML for the Google homepage.
  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })

  fs.stat(path, (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    //we have access to the file stats in `stats`
  })
});
