
const Mongoose = require('mongoose')
const urlConnection = require('./key_dev')

module.exports = function dataBaseConnection(){
  return Mongoose
    .connect(urlConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`----------> Connected to MongoDB`))
    .catch((err) => console.log(err))
}