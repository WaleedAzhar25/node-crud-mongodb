const mongoose = require('mongoose');

async function connectMongoDb (url) {
  return  mongoose.connect(url).then(
  ()=> console.log('MongoDb connected'))
  .catch(()=> console.log('Failed to connect Db'));
}

module.exports = {
    connectMongoDb
}