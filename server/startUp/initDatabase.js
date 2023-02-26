const Product = require("../models/Product");
const Category = require("../models/Category");

const categoriesMock = require("../mock/categories.json");
const productsMock = [
  ...require("../mock/combo.json"),
  ...require("../mock/pizza.json"),
  ...require("../mock/rolls.json"),
  ...require("../mock/sets.json"),
  ...require("../mock/snacks.json"),
];

module.exports = async () => {
  const products = await Product.find();
  const categories = await Category.find();
  if (categories.length !== categoriesMock.length) {
    await createCategory(Category, categoriesMock);
  }
  if (products.length !== productsMock.length) {
    await createProducts(Product, productsMock);
  }
};

async function createCategory(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
async function createProducts(Model, data) {
  const categories = await Category.find();
  await Model.collection.drop();

  return Promise.all(
    data.map(async (item) => {
      try {
        for (const category of categories) {
          if (category.name === item.categoryName) {
            delete item._id;

            const newItem = new Model({
              ...item,
              category,
            });

            await newItem.save();
            return newItem;
          }
        }
      } catch (error) {
        return error;
      }
    })
  );
}
