const express = require('express');
const userRouter = require('./routes/user')

const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middleware')

const app = express();

const PORT = 5001;  

connectMongoDb('mongodb://127.0.0.1:27017/crud-api');

app.use(express.urlencoded({extends : false}));
app.use(logReqRes('log.txt'));

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
}); 
