const express = require("express");
const auth = require("../../middleware/authMiddleware");
const admin = require("../../middleware/adminMiddleware");
const {
  getAllServices,
  createService,
  updateService,
  deleteService,
} = require("../../controllers/adminServiceController");

const router = express.Router();

router.get("/", auth, admin, getAllServices);
router.post("/", auth, admin, createService);
router.put("/:id", auth, admin, updateService);
router.delete("/:id", auth, admin, deleteService);

module.exports = router;
