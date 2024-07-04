const Price = require("./model");

async function getPrices() {
  try {
    const result = await Price.find({});
    return result;
  } catch (error) {
    throw new Error(`Error when getting all prices: ${error}`);
  }
}

async function getPriceById(id) {
  try {
    const result = await Price.findById(id);
    return result;
  } catch (error) {
    throw new Error(`Error when getting spesific price by id: ${error}`);
  }
}

async function setPrice(data) {
  try {
    const { type, price, offers } = data;
    const newData = new Price({ type, price, offers });
    await newData.save();
  } catch (error) {
    throw new Error(`Error when setting the price: ${error}`);
  }
}

async function removePrice(id) {
  try {
    await Price.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error when removing price: ${error}`);
  }
}

module.exports = { getPrices, getPriceById, setPrice, removePrice };
