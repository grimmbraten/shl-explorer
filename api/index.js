import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLError } from 'graphql';
import { resolvers, typeDefs } from './schema/index.js';

const server = new ApolloServer({ typeDefs, resolvers });

export default startStandaloneServer(server, {
  context: ({
    req: {
      headers: { authorization }
    }
  }) => {
    if (authorization !== process.env.KEY) throw new GraphQLError('Access denied');
  },
  listen: { port: 4000 }
}).then(({ url }) => console.log(`🚀 Apollo GraphQL Server ready at ${url}`));
