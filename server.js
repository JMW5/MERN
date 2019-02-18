const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

//init express into app variable
const app = express();

//body parser
app.use(bodyParser.json());

//Database Configs
const db = require('./config/keys').mongoURI

//Connect to DB
mongoose
    .connect(db)
    .then(() => console.log("Mongo DB Connected"))
    .catch(err => console.log(err))


// Use Routes
app.use('/api/items', items)

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname+'client/build/index.html'));
    })
}

//Run the server
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running at port ${port}`))