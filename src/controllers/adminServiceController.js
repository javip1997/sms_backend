const Service = require("../models/Service");

// GET ALL SERVICES (ADMIN)
exports.getAllServices = async (req, res) => {
  const services = await Service.find()
    .populate("category", "name")
    .sort({ createdAt: -1 });

  res.json(services);
};

// CREATE SERVICE (ADMIN)
exports.createService = async (req, res) => {
  const { name, price, description, category, isActive } = req.body;

  const service = await Service.create({
    name,
    price,
    description,
    category,
    isActive,
  });

  res.status(201).json(service);
};

// UPDATE SERVICE (ADMIN)
exports.updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(service);
};

// DELETE SERVICE (ADMIN)
exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Service deleted" });
};
