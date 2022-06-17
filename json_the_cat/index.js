const { breedFetcher } = require('./breedFetcher');

const breedName = process.argv[2];

breedFetcher(breedName, (error, data) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(data);
  }
});