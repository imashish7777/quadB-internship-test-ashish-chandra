const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;
const { connection } = require("./Configs/db");
const datamodel = require("./models/data");

const axios = require("axios");
app.use(cors());

// Fetch and store data route
app.get("/fetchApidata", async (req, res) => {
  try {
    // Fetch data from the WazirX API
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const apiData = response.data;

    // Get the top 10 results
    const top10apiData = Object.values(apiData).slice(0, 10);

    // Map the data to match the schema
    const apiDataFinal = top10apiData.map((ticker) => ({
      name: ticker.name,
      last: ticker.last,
      buy: ticker.buy,
      sell: ticker.sell,
      volume: ticker.volume,
      base_unit: ticker.base_unit,
    }));

    // res.json(apiDataFinal);

    // // Insert data into MongoDB
    await datamodel.insertMany(apiDataFinal);
    const tickers = await datamodel.find().limit(10);
    console.log("data fetched for mongodb");

    res.json(tickers);
  } catch (error) {
    console.error("Error fetching or storing tickers:", error);
    res.status(500).send("An error occurred");
  }
});

// Route to view the stored tickers


app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (err) {
    console.log("unable to connect to database");
  }
});
