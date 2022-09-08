import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date
  type Money {
    amount: Float
    currency: String
  }

  type User {
    id: ID
    uid: String
    name: String!
    phone: String!
    roles: [String]!
    balance: Money!
    espace: Espace
    createdAt: Float
    transSended: [Trans!]!
    transReceived: [Trans!]!
  }
  type Espace {
    name: String
    city: String
    address: String
    logo: String
  }

  type Address {
    city: String
    street: String
  }

  type Company {
    id: ID!
    name: String!
    logo: Float!
    contacts: [String!]
    rccm: String
    transCost: Float
    idNat: String
    banner: String
  }

  type Trans {
    id: ID!
    sender: User!
    receiver: User!
    amount: Money!
    product: String
    transType: String!
    ref: String!
    cost: Float!
    createdAt: Float!
    owner: String!
  }
  type Query {
    # users query
    users: [User!]!
    user(uid: String!): User

    # trans query
    allTrans(uid: ID): [Trans!]!
    myTrans(id: ID): [Trans!]!
    trans(id: ID!): Trans

    #product query
    company: Company!
  }

  #### Mutation for Create/Update/Delete data
  type Mutation {
    # User
    createUser(data: CreateUserInput!): User
    updateUser(id: ID!, data: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean

    # Trans
    rechargeDistributor(data: CreateTransInput!): Trans!
    rechargeClient(data: CreateTransInput!): Trans!
    shareClient(data: CreateTransInput!): Trans!
    withdraw(data: CreateTransInput!): Trans!
    cancelTrans(id: ID!): Trans
    archiveTrans(id: ID!): Trans

    # create company
    createCompany(data: CreateCompanyInput!): Company!
  }

  input CreateCompanyInput {
    name: String!
    logo: Float!
    contacts: [String!]!
    rccm: String
    transCost: Float
    idNat: String
    banner: String
  }

  input CreateUserInput {
    name: String!
    phone: String!
    roles: [String!]!
    password: String!
    espace: EspaceInput
  }

  input UpdateUserInput {
    uid: String
    name: String
    phone: String
    role: String
    espace: EspaceInput
  }
  input EspaceInput {
    name: String
    city: String
    address: String
    logo: String
  }

  input AddressInput {
    city: String
    street: String
    latLong: [String]
  }

  input CreateTransInput {
    phoneReceiver: String!
    amount: MoneyInput!
    cost: Float!
    libele: String
  }

  input MoneyInput {
    amount: Float!
    currency: String!
  }
`;
