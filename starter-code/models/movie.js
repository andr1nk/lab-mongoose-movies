const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String
  }, 
  genre: {
    type: String,
    enum: ["thriller", "animation", "comedy", "horror", "other"]
  },
  plot: {
    type: String
  }
})



const Movie = mongoose.model("Movies", movieSchema)
module.exports = Movie;