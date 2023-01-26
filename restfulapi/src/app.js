const express = require('express');
require('./db/connection');
const studentsRouter = require('./routers/student');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(studentsRouter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('hello from the other side');
});

app.listen(port, () => {
	console.log(`connection is setup at ${port}`);
});

// You do not need express.json() and express.urlendcoded()
// gor GET Requests or DElete Requests. We only need it for post and put req.
//

// Express.json() is a method inbuilt in express to recognize the incoming
//  Request Object as a json Object. This method is called as a middleware
//  in your applicaton using the code: /// app.use(express.json())
