const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001;
const getShows = require('./shows');
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/rest/test', (req, res) => res.send({ hello: 'kodiri'}))

app.get('/rest/shows', (req, res) => res.send(getShows()))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))