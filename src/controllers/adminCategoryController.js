const Category = require("../models/Category");

// GET ALL CATEGORIES (ADMIN)
exports.getCategories = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.json(categories);
};

// CREATE CATEGORY (ADMIN)
exports.createCategory = async (req, res) => {
  const { name } = req.body;

  const exists = await Category.findOne({ name });
  if (exists) {
    return res.status(400).json({ message: "Category already exists" });
  }

  const category = await Category.create({ name });
  res.status(201).json(category);
};

// UPDATE CATEGORY (ADMIN)
exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(category);
};

// DELETE CATEGORY (ADMIN)
exports.deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
};
