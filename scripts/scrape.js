// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

var scrapeArticles = function() {
    return axios.get("https://www.vox.com").then(function(res)  {
        // Load the html body from request into cheerio
        var $ = cheerio.load(res.data);
        var articles = [];
        // For each element with a "title" class
        $(".title").each(function(i, element) {
          // Look at Vox.com for the corresponding class names used  
          // Save the text and href of each link enclosed in the current element
          var title = $(element).children("a").text();
          var link = $(element).children("a").attr("href");
    
          // If this found element had both a title and a link
          if (title && link) {
            // Insert the data in the scrapedData db
            
            articles.push({
              title: title,
              link: link
            },
            function(err, inserted) {
              if (err) {
                // Log the error if one is encountered during the query
                console.log(err);
              }
              else {
                // Otherwise, log the inserted data
                console.log(inserted);
              }
            });
          }
        });
        return articles;
    });
};

module.exports = scrapeArticles