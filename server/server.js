const express = require('express');
const schema = require('./schema');
const graphqlHTTP = require('express-graphql');

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL server');
});

const root = { hello: () => 'Hi! Im Cintia'};

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log("Running server on localhost:8080");
});
