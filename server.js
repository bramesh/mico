const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000

app.use(express.static('public'));

app.use('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port, function() {
	console.log('Server listening on port port');
});