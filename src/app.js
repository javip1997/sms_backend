const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.route"));

const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

module.exports = app;
