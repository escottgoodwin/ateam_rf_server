const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')

require('dotenv').load();

const resolvers = {
  Query,
  Mutation,
  Node: {
    __resolveType() {
      return null;
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: "https://rfql.herokuapp.com/rfql/dev",
      secret: 'mysecret123',
      debug: true
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))