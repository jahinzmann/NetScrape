var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Headline = new Schema({
    headline: {type: String, required: true},
    link: {type: String, required: true},
    summary: {type: String, required: true}
});