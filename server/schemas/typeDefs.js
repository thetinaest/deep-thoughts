const { gql } = require('apollo-server-express');

const typeDefs = gql ` 
    type Query {
        thoughts: [Thought]
    }
`;

module.exports = typeDefs;