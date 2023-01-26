const mongoose = require('mongoose');
const validator = require('validator');

main()
	.then(() => console.log('connection successfull'))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect('mongodb://localhost:27017/srafil_webeye');

	// use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const UserSchema = new mongoose.Schema({
	// unique: true,
	name: {
		type: String,
		// required: true,
		// | validation
		// lowercase: true,
		trim: true,
		uppercase: true,
		// minlength: 2,
		// / custom error message
		minlength: [2, 'name length should be more than 2 letter'],
		maxlength: 10,
	},
	pro: {
		type: String,
		required: true,
		// /enum means that values ​​different from the anum value cannot be added
		enum: ['frontend', 'backend', 'fulstack'],
	},
	age: {
		type: Number,
		// / validation negative or positive
		validate(value) {
			if (value < 0) {
				throw new Error('age cannot be negetive');
			}
		},
	},
	// / validator after installed
	email: {
		type: String,
		required: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is inValid');
			}
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

// Database Collection
const User = mongoose.model('Users', UserSchema);

const creatDocement = async () => {
	try {
		const Israfil = new User({
			name: 'Israfil1',
			pro: 'fulstack',
			age: 5,
			email: 'isra@yeahoo.co',
		});
		// const Ronnie = new User({
		// 	name: 'Ronnie',
		// 	pro: 'Web Developer',
		// 	age: 22,
		// });
		//* Inserting single document with mongoose
		//! const result = await Israfil.save();
		// * InserTing multple documents in Collection with help of insertMany()
		const result = await User.insertMany([Israfil]);
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};

creatDocement();

const getDocuments = async () => {
	try {
		//* const result = await User.find({ name: 'Ronnie' })
		//? const result = await User.find({ name: 'Ronnie' }).select({
		// 	_id: 0,
		// 	name: 1,
		// });
		// | limit method
		// ?const result = await User.find({ name: 'Ronnie' })
		// 	.select({
		// 		_id: 0,
		// 		name: 1,
		// 	})
		// 	.limit(2);
		// / length finding method
		// *const result = await User.find({ name: 'Ronnie' })
		// 	.select({
		// 		_id: 0,
		// 		name: 1,
		// 	})
		// 	.estimatedDocumentCount();
		// / sort Mathod
		const result = await User.find()
			.select({
				_id: 0,
				name: 1,
			})
			.sort({ name: 1 });

		console.log(result);
	} catch (err) {
		console.log(err);
	}
};
// getDocuments();

const upadateDocument = async (_id) => {
	try {
		// / updating one element
		// const result = await User.updateOne(
		// 	{ _id },
		// 	{
		// 		$set: {
		// 			name: 'Web-Eye',
		// 		},
		// 	}
		// );
		// / updating by findByIdAndUpdate() function
		const result = await User.findByIdAndUpdate(
			{ _id },
			{
				$set: {
					name: 'Israifl ',
				},
			},
			{
				new: true,
			}
		);
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};

// upadateDocument('6339746883bb64479f252a68');

// * deleting document data

const deleteDocument = async (_id) => {
	try {
		// const result = await User.deleteOne({ _id });
		const result = await User.findByIdAndDelete({ _id });
		console.log('delted item :', result);
	} catch (err) {
		console.log(err);
	}
};

// deleteDocument('633974dcca7cca81b2ec2017');
