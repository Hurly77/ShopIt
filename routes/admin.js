const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button>Add Product</button></form>')
});

router.post('/add-product', (req, res, next) => {
  console.log((req.body.title))
  res.redirect('/admin/add-product')
})

module.exports = router;
