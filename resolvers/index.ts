//import { espaceMutation, espaceQuery } from "./espace";
//import { mouvementQuery } from "./mouvement";
//import { opField, opMutation, opQuery } from "./operators";
//import { productMutation, productQuery } from "./products";
import companyMutation from "./company/mutation";
import companyQuery from "./company/query";
import { transField, transMutation, transQuery } from "./trans";
import { userMutation, userQuery } from "./user";

const resolvers = {
  Query: {
    ...userQuery,
    ...companyQuery,
    //...espaceQuery,
    // ...productQuery,
    // ...opQuery,
    ...transQuery,
    //...mouvementQuery,
  },

  Mutation: {
    ...userMutation,
    ...companyMutation,
    //...espaceMutation,
    // ...opMutation,
    //...productMutation,
    ...transMutation,
  },
  ...transField,
};

export default resolvers;
