var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Note = new Schema({
    headline: {type: String, required: true},
    link: {type: String, required: true},
    summary: {type: String, required: true},
    text: {type: String, required: true},
    articleID: {type: String, required: true}
});