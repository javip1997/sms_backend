const Service = require("../models/Service");


exports.getServices = async (req, res) => {
  const services = await Service.find({ isActive: true }).populate("category");
  res.json(services);
};


exports.getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id).populate("category");
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
};


exports.createService = async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json(service);
};
