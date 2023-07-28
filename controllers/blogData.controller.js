const Articles = require("../models/blogData.model")

exports.getArticles = async (req, res) => {
    try {
        const response = await Articles.find();
        res.json(response);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getArticleById = async (req, res) => {
    try {
        const response = await Articles.findOne({
            id: req.params.id
        });
        res.json(response);
        if (!response) {
            return res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}