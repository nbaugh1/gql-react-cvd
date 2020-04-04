const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');



const typeDefs = gql`
  
  type Query {
    country(name: String!): Country,
    summary: Summary,
    states: [State],
    countries: [Country],
    state(name: String!): [State]
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
    state: String,
    positive: Int,
    positiveScore: Int,
    negativeScore: Int,
    negativeRegularScore: Int,
    commercialScore: Int,
    grade: String,
    score: Int,
    negative: Int,
    pending: Int,
    hospitalizedCurrently: Int,
    hospitalizedCumulative: Int,
    inIcuCurrently: Int,
    inIcuCumulative: Int,
    onVentilatorCurrently: Int,
    onVentilatorCumulative: Int,
    recovered: Int,
    lastUpdateEt: String,
    checkTimeEt: String,
    death: Int,
    hospitalized: Int,
    total: Int,
    totalTestResults: Int,
    posNeg: Int,
    fips: String,
    dateModified: String,
    dateChecked: String,
    notes: String,
    hash: String
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
 
  async getStates() {
    return this.get(`https://covidtracking.com/api/v1/states/current.json`);
  }
  async getNews(){
    return this.get(`https://covidtracking.com/api/press`)
  }
  async getSummary() {
    return this.get(`https://covidtracking.com/api/us`);
  }
  async getStateHistorical() {
    return this.get(`https://covidtracking.com/api/v1/states/daily.json`);
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