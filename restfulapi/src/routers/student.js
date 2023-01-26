const express = require('express');
const Student = require('../models/students');
const phones = require('../phones.json');

// // / create a new router
const router = new express.Router();

router.get('/phones', async (req, res) => {
	res.send(phones);
});
router.get('/phones/:id', (req, res) => {
	console.log(req.params);
	const id = parseInt(req.params.id);
	const phone = phones.find((phone) => phone.id == id);
	res.send(phone);
});

// router.post('/students', async (req, res) => {
// 	const User = new Student(req.body);
// 	try {
// 		const createUser = await User.save();
// 		res.status(201).send(createUser);
// 		console.log(req.body);
// 	} catch (e) {
// 		res.status(400).send(e);
// 	}
// });

// router.get('/students', async (req, res) => {
// 	try {
// 		const studensData = await Student.find();
// 		res.send(studensData);
// 	} catch (e) {
// 		res.send(e);
// 	}
// });

// // router.get('/students/:id', async (req, res) => {
// // 	try {
// // 		const _id = req.params.id;
// // 		const studenData = await Student.findById({ _id });
// // 		if (!studenData) {
// // 			return res.status(404).send();
// // 		} else {
// // 			res.send(studenData);
// // 		}
// // 	} catch (e) {
// // 		res.status(500).send(e);
// // 	}
// // });

// // / deleting students

// router.delete('/students/:id', async (req, res) => {
// 	try {
// 		const deleteStu = await Student.findByIdAndDelete(req.params.id);
// 		if (!req.params.id) {
// 			res.status(404).send();
// 		} else {
// 			res.send(deleteStu);
// 		}
// 	} catch (e) {
// 		res.status(500).send(e);
// 	}
// });

// // / update students by id

// router.patch('/students/:id', async (req, res) => {
// 	try {
// 		const _id = req.params.id;
// 		const updateStu = await Student.findByIdAndUpdate(_id, req.body, {
// 			new: true,
// 		});
// 		res.send(updateStu);
// 	} catch (e) {
// 		res.status(404).send(e);
// 	}
// });

// router.get('/students/:key', async (req, res) => {
// 	console.log(req.params.key);
// 	try {
// 		const searchByAny = await Student.find({
// 			$or: [{ name: { $regex: req.params.key } }],
// 		});
// 		if (!searchByAny) {
// 			res.status(404).send();
// 		} else {
// 			res.send(searchByAny);
// 		}
// 	} catch (e) {
// 		res.status(500).send(e);
// 	}
// });

module.exports = router;

// / using promise
// app.post('/students', (req, res) => {
// 	console.log(req.body);
// 	const User = new Student(req.body);
// 	User.save()
// 		.then(() => res.status(201).send(User))
// 		.catch((e) => {
// 			res.status(400).send(e);
// 		});

// res.send('hello from backEnd ');
// });
