import { ApolloServer, ApolloError } from "apollo-server-micro";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { typeDefs } from "./../../schema";
import resolvers from "./../../resolvers";
import context from "./../../utils/context";
// import cors from "cors";
// import express from "express";

// import http from "http";
// import { GraphQLError } from "graphql";
import prisma from "../../lib/prisma";
// const formatError = (error: GraphQLError) => {
//   console.log(error);
//   const apiError: any = error.originalError;
//   return {
//     message: apiError.message,
//     status: 500,
//   };
// };

// const app = express();
// app.use(cors({}));
// app.use(express.json());
// const httpServer = http.createServer(app);

// Required logic for integrating with Express

// Same ApolloServer initialization as before, plus the drain plugin.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,

  context,
  //formatError,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// More required logic for integrating with Express

// Modified server startup

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);

  prisma
    .$connect()
    .then((d) => console.log("Connected to DB"))
    .catch((err) => console.log(err));
  console.log(`🚀 Server ready at http://localhost:9080`);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
