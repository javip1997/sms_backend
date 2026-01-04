// controllers/serviceController.js
const Service = require("../models/Service");

exports.createService = async (req, res) => {
  const service = await Service.create({
    title: req.body.title,
    description: req.body.description,
    userId: req.user.id
  });
  res.status(201).json(service);
};

exports.getServices = async (req, res) => {
  const services = await Service.find({ userId: req.user.id });
  res.json(services);
};

exports.getServiceById = async (req, res) => {
  const service = await Service.findOne({
    _id: req.params.id,
    userId: req.user.id
  });
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
};

exports.updateService = async (req, res) => {
  const service = await Service.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(service);
};

exports.deleteService = async (req, res) => {
  await Service.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id
  });
  res.json({ message: "Service deleted" });
};
