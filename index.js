const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Dummy route to confirm deployment works
app.get("/auth", (req, res) => {
  res.send("Auth route is working ✅");
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
