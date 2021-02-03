const express = require('express');
const app = express();

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRoutes)
app.use('/admin', adminRoutes);

app.use((req, res, next)=>{
	res.status(404).send('<h1>Page not found</h1>');
 })

app.listen(3000);
