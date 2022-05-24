var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let dataSchema = new Schema.mongoose(
  {
    title: String,
    description: String,
    tags: [String],
    createAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

var article = mongoose.model('Data', articleSchema);
module.exports = data;
