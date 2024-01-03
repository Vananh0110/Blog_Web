const express = require('express');
var cors = require('cors');
const app = express();
const pool = require('./db');
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());


app.listen(port, () => console.log(`app listening on port ${port}`));