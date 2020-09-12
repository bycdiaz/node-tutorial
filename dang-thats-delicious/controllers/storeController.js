exports.myMiddleware = (req, res, next) => {
  req.name = 'Carlos';
  next();
}

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Cool'
  });
}