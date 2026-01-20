const express = require("express");
const auth = require("../../middleware/authMiddleware");
const admin = require("../../middleware/adminMiddleware");
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../../controllers/adminCategoryController");

const router = express.Router();

router.get("/", auth, admin, getCategories);
router.post("/", auth, admin, createCategory);
router.put("/:id", auth, admin, updateCategory);
router.delete("/:id", auth, admin, deleteCategory);

module.exports = router;
