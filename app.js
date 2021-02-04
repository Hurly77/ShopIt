const express = require('express');
const app = express();

const path = require('path')
const root = require('./util/path')

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRoutes)
app.use('/admin', adminRoutes);

app.use((req, res, next)=>{
	res.status(404).sendFile(path.join(root, 'views', '404.html'))
 })

app.listen(3000);
