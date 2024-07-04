const Feature = require("./model");

async function getFeatures() {
  try {
    const result = Feature.find({});
    return result;
  } catch (error) {
    throw new Error(`Error when getting all features: ${error}`);
  }
}

async function setFeature(data) {
  try {
    const { feature, description, icon } = data;
    const newData = new Feature({
      feature,
      description,
      icon,
    });

    await newData.save();
  } catch (error) {
    throw new Error(`Error when setting feature: ${error}`);
  }
}

async function removeFeature(id) {
  try {
    await Feature.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error when removing feature: ${error}`);
  }
}

module.exports = { getFeatures, setFeature, removeFeature };
