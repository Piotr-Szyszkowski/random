const express = require("express");
const app = express();

app.get("/szisz/:text", (req, res) =>
  res.status(200).send({ params: req.params, query: req.query })
);

module.exports = { app };
