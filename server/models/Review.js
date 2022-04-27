const mongoose = require('mongoose');
const _ = require('underscore');

let ReviewModel = {};

const setTitle = (title) => _.escape(title).trim();

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    set: setTitle,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    required: true,
    trim: true,
  },
  review: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',

  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  pages: {
    type: Number,
    min: 0,
    required: true,
  },
});

ReviewSchema.statics.toAPI = (doc) => ({
  title: doc.title,
  author: doc.author,
  pages: doc.pages,
  genre: doc.genre,
  rating: doc.rating,
  review: doc.review,
});

ReviewSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: mongoose.Types.ObjectId(ownerId),
  };
  return ReviewModel.find(search).select('title author pages genre rating review').lean().exec(callback);
};

ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;
