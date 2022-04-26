
const infoPage = (req, res) => res.render('info', { csrfToken: req.csrfToken() });
const docPage = (req, res) => res.render('documentation', { csrfToken: req.csrfToken() });


module.exports = {
    infoPage,
    docPage,
  };