const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');

const typeDefs = gql`
  
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      covidAPI: new CovidAPI(),
    }
  }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});