const url = process.argv[2];
const path = process.argv[3];


const fs = require('fs');

const request = require('request');
request(url, (error, response, body) => {
  if (error) {
    throw error;
  } fs.writeFile(path, body, (err) => {
    if (err) {
      throw err;
    } else {
    } fs.stat(path, (err, stats) => {
      if (err) {
        throw err;
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
      }
    });
  });
});