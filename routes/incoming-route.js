let express = require('express');
let app = express();
const tripMemesData = require('../backend/lib/index.js')

app.get('/', function (req, res) {
    req.get('Referrer')
    res.send('Hello memes');
    let userData = [];
    userData.push(req.ip, req.hostname, req.baseUrl, req.originalUrl);
})

app.post('/', function (req, res) {
    res.send('Got a POST request!')
})

app.put('/user', function (req, res) {
    req.headers.host;
    res.send('Got a PUT request at /user')
})

let server = app.listen(8080, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})