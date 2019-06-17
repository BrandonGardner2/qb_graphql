const { gql } = require("apollo-server");

module.exports = gql`
  type Market {
    _id: ID
    location: String
    cards: Int
  }

  type Query {
    getMarkets: [Market!]
  }

  input CreateMarketInput {
    location: String
  }

  input EditCardInput {
    _id: String
    cards: Int
  }

  type Mutation {
    addMarket(input: CreateMarketInput!): Market
    editCards(input: EditCardInput!): Market
  }
`;
