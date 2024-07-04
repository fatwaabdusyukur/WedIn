const {
  featureQuery,
  featureMutation,
  featureType,
} = require("../feature/schema");
const { priceQuery, priceMutation, priceType } = require("../price/schema");
const { faqQuery, faqMutation, faqType } = require("../faq/schema");
const { userQuery, userMutation, userType } = require("../user/schema");

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

const combinedQueryFields = {
  ...destructFields(featureQuery),
  ...destructFields(priceQuery),
  ...destructFields(faqQuery),
  ...destructFields(userQuery),
};
const combinedMutationFields = {
  ...destructFields(featureMutation),
  ...destructFields(priceMutation),
  ...destructFields(faqMutation),
  ...destructFields(userMutation),
};

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
  types: [featureType, priceType, faqType, userType],
});

module.exports = { schema };
