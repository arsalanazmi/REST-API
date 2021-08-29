const path = require("path");
const express = require("express");
const app = express();
const userRouter = require("./routers/user")

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("./database/db.js");

const PORT = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`connection is setup at ${PORT}`);
});