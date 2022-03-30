const GraphQL = require('graphql');

const schema = GraphQL.buildSchema(`
    type Station {
        name: String
        abbreviation: String
        latitude: Float
        longitude: Float
        address: String
        city: String
        state: String
        zipcode: Int
    }

    type Query {
        station(abbreviation: String): Station
    }
`);

module.exports = schema;
