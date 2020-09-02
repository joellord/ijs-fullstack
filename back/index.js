const express = require("express");
const conferences = require("./conferences.json");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Incoming request to /");
  res.send(conferences).status(200);
});

app.listen(PORT, () => {
  console.log(`Server starting on NodeJS v ${process.version}`);
  console.log(`Server running on port ${PORT}`);
});