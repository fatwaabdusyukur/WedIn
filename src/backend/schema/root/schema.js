const {
  featureQuery,
  featureMutation,
  featureType,
} = require("../feature/schema");
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

function destructFields(obj) {
  const fields = obj.getFields();

  return Object.values(fields).reduce((acc, field) => {
    const args = field.args.reduce((argsAcc, arg) => {
      argsAcc[arg.name] = {
        description: arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        deprecationReason: arg.deprecationReason,
        extensions: arg.extensions,
        astNode: arg.astNode,
      };
      return argsAcc;
    }, {});

    acc[field.name] = {
      ...field,
      args,
    };
    return acc;
  }, {});
}

const combinedQueryFields = { ...destructFields(featureQuery) };
const combinedMutationFields = { ...destructFields(featureMutation) };

const query = new GraphQLObjectType({
  name: "Query",
  fields: combinedQueryFields,
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: combinedMutationFields,
});

const schema = new GraphQLSchema({
  query,
  mutation,
  types: [featureType],
});

module.exports = { schema };
