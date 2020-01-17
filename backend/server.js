const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const exerciseRoute = require('./routes/exercise');
const userRoute = require('./routes/user');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Mongodb connection established successfully!");
});

app.use(cors());
app.use(express.json());

app.use('/exercise', exerciseRoute);
app.use('/user', userRoute);

app.listen(port, ()=>{
    console.log(`server running on port:  ${port}`);
});