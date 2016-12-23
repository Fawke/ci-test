const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('working');
});

app.listen(8000, function() {
	// console.log('server running on port 8000');
});
