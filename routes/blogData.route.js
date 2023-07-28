const express = require('express');
const { getArticles, getArticleById } = require('../controllers/blogData.controller');
const router = express.Router();

// Route to get all articles
router.get('/articles', getArticles);

// Route to get a specific article by ID
router.get('/articles/:id', getArticleById);

module.exports = router;
