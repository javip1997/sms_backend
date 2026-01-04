const express = require("express");
const auth = require("../middleware/authMiddleware");
const { createService,getServices,getServiceById,updateService,deleteService } = require("../controllers/serviceController");

const router = express.Router();

router.post("/", auth, createService);
router.get("/", auth, getServices);
router.get("/:id", auth, getServiceById);
router.put("/:id", auth, updateService);
router.delete("/:id", auth, deleteService);

module.exports = router;
