const express = require('express');
var cors = require('cors');
const blogRoutes = require('./src/blog/routes');
const userRoutes = require('./src/user/routes');

const app = express();
const pool = require('./db');
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

app.use('/blogs', blogRoutes);
app.use('/auth', userRoutes)

app.use('/', (req, res) => {
  res.send('Hello');
});
app.listen(port, () => console.log(`app listening on port ${port}`));
