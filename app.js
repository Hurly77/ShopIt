const path = require('path')
const root = require('./util/path')

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const shopRoutes = require('./routes/shop')
const adminData = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRoutes)
app.use('/admin', adminData.routes)

app.use((req, res, next)=>{
	res.status(404).sendFile(path.join(root, 'views', '404.html'))
 })

app.listen(3000);
