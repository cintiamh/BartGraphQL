const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL server');
});

app.listen(8080, () => {
    console.log("Running server on localhost:8080");
});
