const mongoose = require('mongoose')
const URI = "mongodb+srv://anguila2525:anguila2525@cluster0.mlj19.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(err => console.error(err));

module.exports = mongoose