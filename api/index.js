import { ApolloServer } from "apollo-server-express";
import { GraphQLError } from "graphql";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./definitions.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(function ({ headers: { authorization } }, res, next) {
  if (authorization !== process.env.KEY)
    return res.status(403).json({ error: "Access denied" });

  next();
});

const httpServer = http.createServer(app);

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    playground: true,
    introspection: true
  });

  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

export default httpServer;
