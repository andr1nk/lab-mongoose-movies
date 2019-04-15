const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritiySchema = new Schema({
  name: {
    type: String
  }, 
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "politician", "other"]
  },
  catchPhrase: {
    type: String
  }
})



const Celebrity = mongoose.model("Celebrity", celebritiySchema)
module.exports = Celebrity;