const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("http://galanthus.tech");
});

const port = process.env.PORT || 8000;
app.listen(port);
console.log(`Server is listening on ${port}`);
