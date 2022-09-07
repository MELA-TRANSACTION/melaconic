//import { espaceMutation, espaceQuery } from "./espace";
//import { mouvementQuery } from "./mouvement";
//import { opField, opMutation, opQuery } from "./operators";
//import { productMutation, productQuery } from "./products";
import { transField, transMutation, transQuery } from "./trans";
import { userMutation, userQuery } from "./user";
import userField from "./user/field";

const resolvers = {
  Query: {
    ...userQuery,
    //...espaceQuery,
    // ...productQuery,
    // ...opQuery,
    ...transQuery,
    //...mouvementQuery,
  },

  Mutation: {
    ...userMutation,
    //...espaceMutation,
    // ...opMutation,
    //...productMutation,
    ...transMutation,
  },
  //...opField,
  ...userField,
  ...transField,
};

export default resolvers;
