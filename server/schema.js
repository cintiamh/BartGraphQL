const GraphQL = require('graphql');

const schema = GraphQL.buildSchema(`
    type Query {
        hello: String
    }
`);

module.exports = schema;
