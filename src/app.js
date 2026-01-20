const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.route"));

const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/categories", categoryRoutes);

// app.use("/api/services", serviceRoutes);
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);


const adminServiceRoutes = require("./routes/admin/service.admin.routes");
app.use("/api/admin/services", adminServiceRoutes);

const adminCategoryRoutes = require("./routes/admin/category.admin.routes");

app.use("/api/admin/categories", adminCategoryRoutes);


module.exports = app;
