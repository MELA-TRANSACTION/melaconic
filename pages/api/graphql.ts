import { ApolloServer, ApolloError } from "apollo-server-micro";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { typeDefs } from "./../../schema";
import resolvers from "./../../resolvers";
import context from "./../../utils/context";
import Cors from "micro-cors";

import prisma from "../../lib/prisma";

const cors = Cors();
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

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);

  prisma
    .$connect()
    .then((d) => console.log("Connected to DB"))
    .catch((err) => console.log(err));
  console.log(`🚀 Server ready at http://localhost:9080`);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
