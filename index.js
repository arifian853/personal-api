require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Separate file for database connection (db.js)
require('./database/db');

// Use Express Router for better route management
const blogDataRoute = require('./routes/blogData.route');
app.use('/api', blogDataRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
