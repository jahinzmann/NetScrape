var models = require("../models");
var scrape = require("../scripts/scrape");

var fetch = { 

startScrape: function(req, res) {
    return scrape().then(function(callback){
        return models.headline.create(callback)
    }).then(function(databaseObject){
        res.json(databaseObject.length + "New articles")
    }).catch(function(anyErrors){
        if(anyErrors) {
            console.log(anyErrors)
        } else {
            res.json("You have scraped sucessfully")
        }
    }) 
} 



};


module.exports = fetch