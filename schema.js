const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema, 
  GraphQLServer
} = require('graphql')


export const typeDefs = `

    type Query {
        getLocation(country: String!): Location
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
        casesPerOneMillion: Int,
        deathsPerOneMillion: Int,
    }
`
export const resolvers = {
    Query:{
        getLocation: async (_, {country}) => {
        const response = await axios(`https://corona.lmao.ninja/countries/${country}`)
        return response.json();
        },
    }
}

// const LocationType = new GraphQLObjectType({
//     name: 'Location',
//     fields: () => ({
//         country: { type: GraphQLString},
//         cases: { type: GraphQLInt},
//         todayCases: { type: GraphQLInt},
//         deaths: { type: GraphQLInt},
//         todayDeaths: { type: GraphQLInt},
//         recovered: { type: GraphQLInt},
//         active: { type: GraphQLInt},
//         critical: { type: GraphQLInt},
//         casesPerOneMillion: { type: GraphQLInt},
//         deathsPerOneMillion: { type: GraphQLInt},
//     })
// })

//Root Query

const RootQuery = new GraphqlObjectType({
    name: 'RootQueryType',
    fields: () => ({
        locations: {
            type: new GraphQLList(LocationType),
            resolve(parent, args){
                return axios.get('https://corona.lmao.ninja/countries')
                .then(res => res.data)
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
