const express = require('express');
const schema = require('./schema');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000/');
    res.header("Access-Control-Allow-Headers", '*');
    res.send('GraphQL server');
});

const root = { station: () => {
    return {
        name: "24th St. Mission",
        abbreviation: "24TH",
        latitude: 37.752470,
        longitude: -122.418143,
        address: "2800 Mission Street",
        city: "San Francisco",
        state: "CA",
        zipcode: 94110,
    };
}};

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

// app.use('/graphql', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", 'http://localhost:3000/');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.listen(8080, () => {
    console.log("Running server on localhost:8080");
});
