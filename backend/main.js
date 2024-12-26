const express = require('express')
const mongoose = require('mongoose');
const User = require("./models/user");
const userRoutes = require('./routes/userRoute');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config(); 

const app = express()

app.use(cors());




mongoose.connect(process.env.MONGO_URI);


const port = 3000

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hi");
})

app.use('/users', userRoutes);
app.use('/getusers',userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})