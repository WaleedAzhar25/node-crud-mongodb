const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 5001;

mongoose.connect('mongodb://127.0.0.1:27017/crud-api').then(
  ()=> console.log('MongoDb connected'))
  .catch(()=> console.log('Failed to connect Db'));

// connectMongoDb('mongodb://127.0.0.1:27017/crud-api')

app.get('/', function (req, res) {
    res.send('GET request to Home')
  });

  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
}); 
