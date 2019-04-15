
const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie")

router.get("/", (req, res, next) => {
  Movie.find({})
  .then( movies => {
    res.render("movies/index", {movies})
  })
  .catch(err => {
    console.error("Error while finding movies", err)
  });
});

// router.get("/new", (req, res, next) => {
//   res.render("celebrities/new");
// });


// router.get("/:id", (req, res, next) => {
//   const _id = req.params.id
//   Celebrity.findById({_id})
//   .then( celebDetails => {
//     res.render("celebrities/show", {celebDetails})
//   })
//   .catch(err => {
//     console.error("Error while finding celebrity details", err)
//   });
// });

// router.post('/', (req, res) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.create({ name, occupation, catchPhrase })
//   .then(() => {
//     console.log('Celebrity successfully added');
//     res.redirect("/celebrities")
//   })
//   .catch(err => {
//     console.error('Error while adding new celeb', err);
//     res.render("/celebrities/new")
//   });
// });

// router.post('/:id/delete', (req, res) => {
//   const _id = req.params.id
//   Celebrity.findByIdAndDelete({_id})
//   .then(() => {
//     console.log('Celebrity successfully deleted');
//     res.redirect("/celebrities")
//   })
//   .catch(err => {
//     console.error('Error while deleting celeb', err);
//   });
// });


// router.get("/:id/edit", (req, res, next) => {
//   const _id = req.params.id
//   Celebrity.findById(_id)
//   .then( celebDetails => {
//     console.log("hello on the edit page")
//     console.log(celebDetails)
//     res.render("celebrities/edit", {celebDetails})
//   })
//   .catch(err => {
//     console.error("Error while editing celebrity details", err)
//   });
// });

// router.post('/:id', (req, res) => {
//   const _id = req.params.id
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.update({_id}, { name, occupation, catchPhrase }, { new: true })
//   .then((updatedData) => {
//     console.log('Celebrity successfully edited');
//     res.redirect("/celebrities");
//   })
//   .catch(err => {
//     console.error('Error while editing new celeb', err);
//   });
// });

module.exports = router;