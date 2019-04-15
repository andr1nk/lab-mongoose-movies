const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js")
const Movie = require("../models/movie.js/index.js")

mongoose.connect('mongodb://localhost/mongoose-movies');


// const celebrities = [
//   {
//     name: "Sean Connery",
//     occupation: "actor",
//     catchPhrase: "Bond, James Bond"
//   },
//   {
//     name: "Lil Wayne",
//     occupation: "singer",
//     catchPhrase: "Yeah"
//   },
//   {
//     name: "Jan Boehmermann",
//     occupation: "comedian",
//     catchPhrase: "Das Rundfunk Tanzorchester Ehrenfeld"
//   }
// ]

// Celebrity.create(celebrities)
//   .then(data => {
//     console.log(`Created ${celebrities.length} celebrities`);
//   })
//   .catch(err => {
//     console.error("Error while seeding the database", err)
//   })


const movies = [
  {
    title: "12 monkeys",
    genre: "thriller",
    plot: "all die"
  },
  {
    title: "Lama",
    genre: "animation",
    plot: "Lama king skurr"
  },
  {
    title: "matrix",
    genre: "horror",
    plot: "wake up neo"
  }, 
  {
    title: "saw",
    genre: "other",
    plot: "ouch"
  }
]

Movie.create(movies)
  .then(data => {
    console.log(`Created ${movies.length} celebrities`);
  })
  .catch(err => {
    console.error("Error while seeding the database", err)
  })
