const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// ➕ CREATE
router.post("/", async (req, res) => {
console.log(req.body);
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json(product);
});

router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updated) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(updated);
});


router.delete("/:id", async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json({ message: "Deleted" });
});

module.exports = router;


