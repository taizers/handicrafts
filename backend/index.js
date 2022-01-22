const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, async(err)=>{
    if(err) throw err;
});

mongoose.connection.once('open', () => { console.log('connect db') })

const usersRouter = require('./routes/users');
const usersLoginRouter = require('./routes/userLogin');

app.use('/login', usersLoginRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})
