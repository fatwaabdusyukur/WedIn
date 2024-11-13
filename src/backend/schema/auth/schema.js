const {
    GraphQLString,
    GraphQLBoolean,
    GraphQLInterfaceType,
    GraphQLObjectType,
  } = require("graphql");

const { register } = require('./resolver');

const fields = {
  status: {
    type: GraphQLBoolean,
    description: 'Status of the authentication process'
  },
  message: {
    type: GraphQLString,
    description: 'Message regarding the authentication process'
  }
}

const authInterface = new GraphQLInterfaceType({
  name: 'Authentication',
  fields: () => fields,
  resolveType: () => authType.name
})

const authType = new GraphQLObjectType({
  name: 'AuthType',
  description: 'Authentication',
  fields: () => fields,
  interfaces: [authInterface]
})

const authMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: {
      type: authInterface,
      args: {
        email: {
          type: GraphQLString,
          description: 'Email for registration'
        },
        username: {
          type: GraphQLString,
          description: 'Username for registration'
        },
        password: {
          type: GraphQLString,
          description: 'Password for registration'
        }
      },
      resolve: async(_, { email, username, password }) => await register(email, username, password)
    }
  }
})

module.exports = { authMutation, authType }