var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var Note = new Schema({
    text: {type: String, required: true},
    articleID: {type: String, required: true}
});

var note = mongoose.model("Note", Note);
module.export = note; 