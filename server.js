const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');



const typeDefs = gql`
type Query {
    location(name: String!): Location
  }

  type Location {
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

  
`;

const resolvers = {
    Query:{
        location: async (_source, { name }, { dataSources }) => {
            return dataSources.covidAPI.getLocation(name);
          }
        },
    }


class CovidAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://corona.lmao.ninja/';
  }

  async getLocation(name) {
    return this.get(`countries/${name}`);
  }
}

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => {
        return{
            covidAPI: new CovidAPI(),
        }
    }
 });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });