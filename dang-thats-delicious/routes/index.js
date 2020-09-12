const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('hello', {
    name: 'Carlos',
    dog: 'Chispa',
    title: 'I Love Food'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
