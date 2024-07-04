const {
  GraphQLString,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const {
  getUsers,
  getUserById,
  getUserByUsername,
  setUser,
} = require("./resolver");

const fields = {
  _id: {
    type: new GraphQLNonNull(GraphQLString),
    description: "Unique identifier for the user",
  },
  email: { type: GraphQLString, description: "Email of user" },
  username: { type: GraphQLString, description: "Username of user" },
  password: { type: GraphQLString, description: "Password of user" },
  role: {
    type: GraphQLInt,
    description: "The role of the system user, whether it is a user or admin",
  },
};

const userInterface = new GraphQLInterfaceType({
  name: "User",
  fields: () => fields,
  resolveType: () => userType.name,
});

const userType = new GraphQLObjectType({
  name: "UserType",
  fields: () => fields,
  interfaces: [userInterface],
});

const userQuery = new GraphQLObjectType({
  name: "Query",
  description: "User Query",
  fields: {
    users: {
      type: new GraphQLList(userInterface),
      resolve: async () => await getUsers(),
    },
    user: {
      type: userInterface,
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (_, { _id }) => await getUserById(_id),
    },
    userByUsername: {
      type: userInterface,
      args: {
        username: { type: GraphQLString },
      },
      resolve: async (_, { username }) => await getUserByUsername(username),
    },
  },
});

const userMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "User mutation",
  fields: {
    setUser: {
      type: userInterface,
      args: {
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: async (_, { email, username, password }) =>
        await setUser(email, username, password),
    },
    removeUser: {
      type: userInterface,
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (_, { _id }) => await removeUser(_id),
    },
  },
});

module.exports = { userQuery, userMutation, userType };
