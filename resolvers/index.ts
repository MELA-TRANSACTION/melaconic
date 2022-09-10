//import { espaceMutation, espaceQuery } from "./espace";
//import { mouvementQuery } from "./mouvement";
//import { opField, opMutation, opQuery } from "./operators";
//import { productMutation, productQuery } from "./products";
import cityMutation from "./city/mutation";
import cityQuery from "./city/query";
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
    ...cityQuery,
    //...mouvementQuery,
  },

  Mutation: {
    ...userMutation,
    ...companyMutation,
    //...espaceMutation,
    // ...opMutation,
    //...productMutation,
    ...transMutation,
    ...cityMutation,
  },
  ...transField,
};

export default resolvers;
