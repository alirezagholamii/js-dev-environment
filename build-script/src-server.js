import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const __dirname = path.resolve();
console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});


app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
