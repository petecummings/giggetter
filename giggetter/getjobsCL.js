
function get_gigs(city, category) {


	var fs = require('fs');

  var gigs = 'X';
  var
    craigslist = require('node-craigslist'),
    client = new craigslist.Client({
    city: city
    }),
    options = {
      category: category
    };
  client
    .search(options)
    .then((listings) => {
      listings.forEach((listing) => {
//        console.log(listing.date, listing.title, listing.url);



        fs.appendFileSync('gigsnow.html', '<li><a href="' + listing.url + '">' + listing.date + ',' + listing.title + ',' + listing.url + '</a></li>\n');


      });

    })
    .catch((err) => {
      console.log('oops!');
      console.error(err);
    });
}


var cities = ["buffalo","rochester", "toronto","syracuse","cleveland","erie","pittsburgh","dc"]
var categories = ["sof","sad"]

var i, j;

for (i=0;i<cities.length;i++) {
	for (j=0;j<categories.length;j++) {

		page = get_gigs(cities[i], categories[j]);


	}

}

var page = get_gigs('buffalo', 'sof');
page += get_gigs('rochester', 'sof');
