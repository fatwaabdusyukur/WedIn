const {
  GraphQLString,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
} = require("graphql");

const {
  getFaqs,
  getFaqById,
  getFaqByType,
  setFaq,
  removeFaq,
} = require("./resolver");

const fields = {
  _id: {
    type: new GraphQLNonNull(GraphQLString),
    description: "Unique identifier for the faq",
  },
  question: {
    type: GraphQLString,
    description: "The question asked",
  },
  answer: {
    type: GraphQLString,
    description: "The answer to the question",
  },
  type: {
    type: GraphQLString,
    description: "Type of question",
  },
};

const faqInterface = new GraphQLInterfaceType({
  name: "Faq",
  description: "Frequently asked questions",
  fields: () => fields,
  resolveType: () => faqType.name,
});

const faqType = new GraphQLObjectType({
  name: "FAQ",
  description: "Frequently asked questions",
  fields: () => fields,
  interfaces: [faqInterface],
});

const faqQuery = new GraphQLObjectType({
  name: "Query",
  description: "Faq query",
  fields: {
    faqs: {
      type: new GraphQLList(faqInterface),
      resolve: async () => await getFaqs(),
    },
    faq: {
      type: faqInterface,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, { _id }) => await getFaqById(_id),
    },
    faqType: {
      type: new GraphQLList(faqInterface),
      args: {
        type: { type: GraphQLString },
      },
      resolve: async (_, { type }) => await getFaqByType(type),
    },
  },
});

const faqMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Faq mutation",
  fields: {
    setFaq: {
      type: faqInterface,
      args: {
        question: { type: GraphQLString },
        answer: { type: GraphQLString },
        type: { type: GraphQLString },
      },
      resolve: async (_, { question, answer, type }) =>
        await setFaq(question, answer, type),
    },
    removeFaq: {
      type: faqInterface,
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (_, { _id }) => await removeFaq(_id),
    },
  },
});

module.exports = { faqQuery, faqMutation, faqType };
