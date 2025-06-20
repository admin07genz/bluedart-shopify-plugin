const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const crypto = require("crypto");
const querystring = require("querystring");

const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET;
const SCOPES = "read_orders,write_orders";
const REDIRECT_URI = "https://bluedart-shopify-plugin.onrender.com/callback";

app.get("/", (req, res) => {
  res.send("✅ App is running");
});

// Start auth flow
app.get("/auth", (req, res) => {
  const shop = req.query.shop;
  if (!shop) return res.status(400).send("Missing shop param");

  const state = crypto.randomBytes(8).toString("hex");
  const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${SHOPIFY_API_KEY}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&state=${state}`;

  res.redirect(installUrl);
});

// Callback from Shopify
app.get("/callback", (req, res) => {
  const { shop, hmac, code, state } = req.query;

  if (!shop || !hmac || !code) {
    return res.status(400).send("Missing required parameters");
  }

  // Here you can add hmac validation and token exchange logic
  res.send(`✅ Auth callback hit for ${shop}, code: ${code}`);
});

app.listen(port, () => {
  console.log(`🚀 App live on port ${port}`);
});
