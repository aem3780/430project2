const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/getBooks', mid.requiresLogin, controllers.Book.getBooks);
  
  app.get('/getReviews', mid.requiresLogin, controllers.Review.getReviews);

  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/info', mid.requiresSecure, controllers.Info.infoPage);
  app.get('/documentation', mid.requiresSecure, controllers.Info.docPage);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/maker', mid.requiresLogin, controllers.Book.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Book.makeBook);

  app.get('/review', mid.requiresLogin, controllers.Review.reviewPage);
  app.post('/review', mid.requiresLogin, controllers.Review.makeReview);

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('*', (req, res) => { res.render('notFound'); });
};

module.exports = router;
