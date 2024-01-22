const express = require ("express");
const db = require("./config/database")

const app = express();
const port = 3000;

async function startServer() {
    try {
      await db.authenticate();
      console.log("Database Connected");
      app.listen(port, () => console.log(`Server running at port ${port}`));
    } catch (error) {
      console.error(error);
    }
  }
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello World!')
   });

startServer();