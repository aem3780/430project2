const models = require('../models');
const ReviewModel = require('../models/Review');

const { Review } = models;

const reviewPage = (req, res) => res.render('review', { csrfToken: req.csrfToken() });

const makeReview = async (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.pages || !req.body.genre || !req.body.rating) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    const reviewData = {
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        genre: req.body.genre,
        rating: req.body.rating,
        review: req.body.review,
        owner: req.session.account._id,
    };

    try {
        const newReview = new Review(reviewData);
        await newReview.save();
        return res.status(201).json({
            title: newReview.title, author: newReview.author, pages: newReview.pages, genre: newReview.genre,
            rating: newReview.rating, review: newReview.review
        });
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'This review already exists on your list!' });
        }
        return res.status(400).json({ error: 'An error occured' });
    }
};


const getReviews = (req, res) => ReviewModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
        console.log(err);
        return res.status(400).json({ error: 'An error occurred!' });
    }
    return res.json({ reviews: docs });
});

module.exports = {
    reviewPage,
    makeReview,
    getReviews,
};