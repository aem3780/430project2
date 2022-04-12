const mongoose = require('mongoose');
const _ = require('underscore');

let BookModel = {};

const setTitle = (title) => _.escape(title).trim();

const BookSchema = new mongoose.Schema({
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

BookSchema.statics.toAPI = (doc) => ({
  title: doc.title,
  author: doc.author,
  pages: doc.pages,
});

BookSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: mongoose.Types.ObjectId(ownerId),
  };
  return BookModel.find(search).select('title author pages').lean().exec(callback);
};

BookSchema.statics.deleteByOwner = (ownerId, title, callback) => {
  const search = {
    owner: mongoose.Types.ObjectId(ownerId),
    title,
  };
  return BookModel.deleteOne(search).select('title author pages').lean().exec(callback);
};

BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;
