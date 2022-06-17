const request = require('request');

const breedFetcher = function(breed, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
            callback(error, null);
        } else if (data.length === 0){
            callback("data not found", null)
        } else {
            callback(null, data[0].description)
        }
    })
}

module.exports = { breedFetcher };
