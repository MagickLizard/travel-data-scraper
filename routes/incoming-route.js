let express = require('express');
let app = express();
const getDetailsTrip = require('../backend/helpers/get-details-trip.js');
let { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    hello: String
    memes: String
  }
`);

app.get('/test', (req, res) => {
    req.get('Referrer')
    res.send('Hello memes');
    console.log('getDetailsTrip', getDetailsTrip.tripAdvisorLocationAddedPromise())
    let userData = [];
    userData.push(req.ip, req.hostname, req.baseUrl, req.originalUrl);
})

app.post('/', (req, res) => {
    res.send('Got a POST request!')
})

app.put('/user', (req, res) => {
    req.headers.host;
    res.send('Got a PUT request at /user')
})

let server = app.listen(8080, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("app listening at http://",'host>', host, 'post>', port)
})


var root = { hello: () => 'Hello world!' };
var second = { memes: () => 'this is a meme!' };
graphql(schema, '{ hello }', root,).then((response) => {
  console.log('test',response);
});