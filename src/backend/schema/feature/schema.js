const {
  GraphQLString,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
} = require("graphql");

const { getFeatures, setFeature, removeFeature } = require("./resolver");

const fields = {
  _id: {
    type: new GraphQLNonNull(GraphQLString),
    description: "The id of the feature",
  },
  feature: {
    type: GraphQLString,
    description: "The feature name",
  },
  description: {
    type: GraphQLString,
    description: "The description of the feature",
  },
  icon: {
    type: GraphQLString,
    description: "The icon of the feature",
  },
};

const featureInterface = new GraphQLInterfaceType({
  name: "featureInterface",
  description: "The features offered by the web to users",
  fields: () => fields,
  resolveType: () => featureType.name,
});

const featureType = new GraphQLObjectType({
  name: "featureType",
  description: "The features offered by the web to users",
  interfaces: [featureInterface],
  fields: () => fields,
});

const featureQuery = new GraphQLObjectType({
  name: "featureQuery",
  description: "The features offered by the web to users",
  fields: {
    features: {
      type: new GraphQLList(featureInterface),
      resolve: async () => await getFeatures(),
    },
  },
});

const featureMutation = new GraphQLObjectType({
  name: "featureMutation",
  description: "The features offered by the web to users",
  fields: {
    addFeature: {
      type: featureInterface,
      args: {
        feature: { type: GraphQLString },
        description: { type: GraphQLString },
        icon: { type: GraphQLString },
      },
      resolve: async (_, args) => await setFeature(args),
    },
    deleteFeature: {
      type: featureInterface,
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (_, { _id }) => await removeFeature(_id),
    },
  },
});

module.exports = { featureQuery, featureMutation, featureType };
