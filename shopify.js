module.exports = function(app) {
  app.get("/shopify-test", (req, res) => {
    res.send("✅ Shopify route working!");
  });

  // Add more Shopify routes below as needed
};
