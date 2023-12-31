const express = require('express'); 
const http = require('http'); 

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

server.listen(3000, () => {
    console.log('Server running on port 3000'); 
});
