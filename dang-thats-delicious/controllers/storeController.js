exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Cool'
  });
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
}
