const fs = require('fs');
const p = require('../util/path');

const getProductsFromFile = (callback) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			return callback([]);
		} else {
			callback(JSON.parse(fileContent));
		}
	});
};

module.exports = class Product {
	constructor (title, imageUrl, description, price) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save () {
		getProductsFromFile((products) => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll (callback) {
		getProductsFromFile(callback);
	}
};
