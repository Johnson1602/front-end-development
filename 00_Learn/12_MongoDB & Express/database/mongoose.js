const mongoose = require('mongoose');

// connect to mongoDB
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to mongoDB'))
	.catch(err => console.log('Failed to connect to mongoDB\n', err));
