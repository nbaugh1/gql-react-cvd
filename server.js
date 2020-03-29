const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');
const graphqlHTTP = require('express-graphql')
// const app = require('express')
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const rp = require('request-promise')

const typeDefs = `
  
  type Query {
    country(name: String!): Country,
    summary: Summary,
    states: [State],
    countries: [Country]
  }

  type Country {
    country: String,
    cases: Int,
    todayCases: Int,
    deaths: Int,
    todayDeaths: Int,
    recovered: Int,
    active: Int,
    critical: Int,
    casesPerOneMillion: Float,
    deathsPerOneMillion: Float,
  }

  type Summary {
    cases: Int,
    deaths: Int,
    recovered: Int,
    updated: Int,
    active: Int
  }

  type State {
    state: String,
    cases: Int,
    todayCases: Int,
    deaths: Int,
    todayDeaths: Int,
    active: Int
  }
`;

const resolvers = {
  Query: {
    country: async (_source, { name }, { dataSources }) => {
      return dataSources.covidAPI.getCountry(name);
    },
    country
    summary: async (_source, _, { dataSources }) => {
      return dataSources.covidAPI.getSummary();
    },
    states: async (_source, _, { dataSources }) => {
      return dataSources.covidAPI.getStates();
    },
    countries: async (_source, _, { dataSources }) => {
      return dataSources.covidAPI.getCountries();
    },
  },
}

class CovidAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://corona.lmao.ninja/';
  }

  async getCountry(name) {
    return this.get(`countries/${name}`);
  }

  async getAllCountries() {
    return this.get(`https://corona.lmao.ninja/countries?sort=country`);
  }

  async getStates() {
    return this.get(`https://corona.lmao.ninja/states`);
  }

  async getSummary() {
    return this.get(`https://corona.lmao.ninja/all`);
  }
}

const schema = new makeExecutableSchema({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      covidAPI: new CovidAPI(),
    }
  }
});

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });