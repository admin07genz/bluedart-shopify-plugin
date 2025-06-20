module.exports = function(app) {
  app.get("/bluedart-test", (req, res) => {
    res.send("✅ BlueDart route working!");
  });

  // Add more Bluedart routes below as needed
};
