const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route handlers
require("./shopify")(app);
require("./bluedart")(app);

// Test route
app.get("/", (req, res) => {
  res.send("✅ BlueDart + Shopify Plugin is live on Render!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
