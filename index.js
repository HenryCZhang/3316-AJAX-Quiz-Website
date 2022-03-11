const express = require('express');
const app = express();
const questionList = require('./questions.json');

app.use(express.static('static'));// serve static contents

app.get('/questionInJSON', (req, res) => {
    res.json(questionList); //json() = JSON.stringify()
})

app.listen(80, (req, res) => {
    console.log('server listening on port 80');
})

require('http').get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
    resp.on('data', function (ip) {
        console.log('Server started on http://' + ip + ':80, have fun!');
    });
});