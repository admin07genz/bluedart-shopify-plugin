const express = require("express");
const app = express();
const shopify = require("./shopify");

app.use("/", shopify);

app.get("/", (req, res) => {
  res.send("Bluedart Plugin is running.");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

