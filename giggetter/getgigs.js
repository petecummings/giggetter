const craigslist = require('node-craigslist');

let client = new craigslist.Client({
  baseHost : 'craigslist.ca',
  city : 'Toronto'
});



client
  .list()
  .then((listings) => {
    // play with listings here...
    listings.forEach((listing) => console.log(listing));
  })
  .catch((err) => {
    console.error(err);
  });
