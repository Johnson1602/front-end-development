const mongoose = require('mongoose');

// 1. connect to mongodb
mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Connected to mongodb'))
	.catch(err => console.log('Failed to connect to mongodb'));

// 2. create database schema
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	isPublished: Boolean
});

// 3. create collection using the above schema
const Course = mongoose.model('Course', courseSchema);	// courses

// 4. create a new document in collection 'courses'
const course = new Course({
	name: 'MongoDB Basics',
	author: 'Johnson',
	isPublished: false
});

// insert the above document into collection
course.save();

// 5. another way to create document: use static method
// 5.1 using callback function
/*
Course.create({
	name: 'Javascript',
	author: 'Johnson',
	isPublished: false
}, (err, doc) => {
	console.log(err);
	console.log(doc);
});
*/

// 5.2 using promise
// Course.create({
// 	name: 'Node.js',
// 	author: 'Johnson',
// 	isPublished: false
// })
// 	.then(doc => console.log(doc))
// 	.catch(err => console.log(err));
