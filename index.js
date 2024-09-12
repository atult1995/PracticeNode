const express = require("express");
require("./db/mongoose");
const router = require("./router");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "DELETE", "PATCH", "POST"],
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
  })
);
app.use(express.json());
app.use(router);
app.listen(4000, () => {
  console.log("listening port", 4000);
});
