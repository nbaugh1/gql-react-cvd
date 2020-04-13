const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');

const typeDefs = gql`
  
  type Query {
    summary: Summary,
    states: [State],
    state(name: String!): [State]
  }

  type Summary {
    positive: Int,
    negative: Int,
    pending: Int,
    hospitalizedCurrently: Int,
    hospitalizedCumulative: Int,
    inIcuCurrently: Int,
    inIcuCumulative: Int,
    onVentilatorCurrently: Int,
    onVentilatorCumulative: Int,
    recovered: Int,
    hash: String,
    lastModified: String,
    death: Int,
    hospitalized: Int,
    total: Int,
    totalTestResults: Int,
    posNeg: Int,
    notes: String
  }

  type State {
    date: Int,
    state: String,
    positive: Int,
    negative: Int,
    pending: Int,
    hospitalizedCurrently: Int,
    hospitalizedCumulative: Int,
    inIcuCurrently: Int,
    inIcuCumulative: Int,
    onVentilatorCurrently: Int,
    onVentilatorCumulative: Int,
    recovered: Int,
    hash: String,
    dateChecked: String,
    death: Int,
    hospitalized: Int,
    total: Int,
    totalTestResults: Int,
    posNeg: Int,
    fips: String,
    deathIncrease: Int,
    hospitalizedIncrease: Int,
    negativeIncrease: Int,
    positiveIncrease: Int,
    totalTestResultsIncrease: Int
  }
`;

const resolvers = {
  Query: {
    summary: async (_source, _, { dataSources }) => {
      return dataSources.covidAPI.getSummary();
    },
    states: async (_source, _, { dataSources }) => {
      return dataSources.covidAPI.getStates();
    },
    // news: async (_source, _, { dataSources }) => {
    //   return dataSources.covidAPI.getNews();
    // }
  },
}

class CovidAPI extends RESTDataSource {

  async getStates() {
    return this.get(`https://covidtracking.com/api/v1/states/daily.json`);
  }
  async getNews() {
    return this.get(`https://covidtracking.com/api/press`)
  }
  async getSummary() {
    return this.get(`https://covidtracking.com/api/us`);
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