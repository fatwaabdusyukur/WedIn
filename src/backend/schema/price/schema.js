const {
  GraphQLString,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
} = require("graphql");
const {
  getPrices,
  getPriceById,
  setPrice,
  removePrice,
} = require("./resolver");

const fields = {
  _id: {
    type: new GraphQLNonNull(GraphQLString),
    description: "Unique identifier of the price package",
  },
  type: {
    type: GraphQLString,
    description: "details of package price types",
  },
  price: {
    type: GraphQLString,
    description: "price of the package",
  },
  offers: {
    type: new GraphQLList(GraphQLString),
    description: "Services offered from the package",
  },
  description: {
    type: GraphQLString,
    description: "description of the package",
  },
  color: {
    type: GraphQLString,
    description: "color of the package",
  },
};

const priceInterface = new GraphQLInterfaceType({
  name: "PricePackage",
  description: "Type of package price for each digital invitation",
  fields: () => fields,
  resolveType: () => priceType.name,
});

const priceType = new GraphQLObjectType({
  name: "Price",
  description: "Type of package price for each digital invitation",
  fields: () => fields,
  interfaces: [priceInterface],
});

const priceQuery = new GraphQLObjectType({
  name: "Query",
  description: "Price packages query",
  fields: {
    price: {
      type: priceInterface,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (_, { _id }) => await getPriceById(_id),
    },
    prices: {
      type: new GraphQLList(priceInterface),
      resolve: async () => await getPrices(),
    },
  },
});

const priceMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Price packages mutation",
  fields: {
    setPrice: {
      type: priceInterface,
      args: {
        price: { type: GraphQLString },
        type: { type: GraphQLString },
        offers: { type: new GraphQLList(GraphQLString) },
      },
      resolve: async (_, args) => await setPrice(args),
    },
    deletePrice: {
      type: priceInterface,
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (_, { _id }) => await removePrice(_id),
    },
  },
});

module.exports = { priceQuery, priceMutation, priceType };
