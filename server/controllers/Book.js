const models = require('../models');
const BookModel = require('../models/Book');

const { Book } = models;

const makerPage = (req, res) => res.render('app');

const makeBook = async (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.pages || !req.body.genre) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  const bookData = {
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    genre: req.body.genre,
    owner: req.session.account._id,
  };

  try {
    const newBook = new Book(bookData);
    await newBook.save();
    return res.status(201).json({ title: newBook.title, author: newBook.author, pages: newBook.pages, genre: newBook.genre });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Book already exists on your shelf!' });
    }
    return res.status(400).json({ error: 'An error occured' });
  }
};




const getBooks = (req, res) => BookModel.findByOwner(req.session.account._id, (err, docs) => {
  if (err) {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred!' });
  }
  return res.json({ books: docs });
});

module.exports = {
  makerPage,
  makeBook,
  getBooks,
};
