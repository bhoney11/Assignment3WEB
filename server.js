const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 🔗 РОУТЫ
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
