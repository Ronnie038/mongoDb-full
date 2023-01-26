const mongoose = require('mongoose');

const connection = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/students-api');
		console.log('connection successfull');
	} catch (err) {
		console.log('no connection ');
	}
};

connection();
