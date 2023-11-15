const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello App version 1.0.0.0");
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));
