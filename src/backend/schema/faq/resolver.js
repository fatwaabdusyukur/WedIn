const Faq = require("./model");

async function getFaqs() {
  try {
    const result = await Faq.find({});
    return result;
  } catch (error) {
    throw new Error(`Error when getting all faqs: ${error}`);
  }
}

async function getFaqById(id) {
  try {
    const result = await Faq.findById(id);
    return result;
  } catch (error) {
    throw new Error(`Error when getting faq by id: ${error}`);
  }
}

async function getFaqByType(type) {
  try {
    const result = await Faq.find({ type: type }).exec();
    return result;
  } catch (error) {
    throw new Error(`Error when getting faq by type: ${error}`);
  }
}

async function setFaq(data) {
  try {
    const { question, answer, type } = data;
    const newData = new Faq({
      question: question,
      answer: answer,
      type: type,
    });

    await newData.save();
  } catch (error) {
    throw new Error(`Error when setting faq: ${error}`);
  }
}

async function removeFaq(id) {
  try {
    await Faq.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error when removing faq: ${error}`);
  }
}

module.exports = { getFaqs, getFaqById, getFaqByType, setFaq, removeFaq };
