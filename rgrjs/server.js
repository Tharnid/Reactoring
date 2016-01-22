import express from 'express';

let app = express();

app.get('/', (req, res) => res.send("Hello Express using ES6!!!"));

app.listen(3000);