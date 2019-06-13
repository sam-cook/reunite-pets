require("dotenv").config();

const express = require("express");
const { postgraphile } = require("postgraphile");
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./database");

const app = express();

database.sync().then(
  () => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(
      postgraphile(process.env.POSTGRES_URL, "public", {
        graphiql: true,
        enhanceGraphiql: true
      })
    );

    app.listen(process.env.PORT || 3000, () => {
      // eslint-disable-next-line no-console
      console.log(`App running on port ${process.env.PORT || 3000}`);
    });
  },
  err => {
    // eslint-disable-next-line no-console
    console.log("Error syncing database", err);
  }
);
