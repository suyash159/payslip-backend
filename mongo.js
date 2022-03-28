const mongoose = require("mongoose");

// const url = process.env.MONGODB_URL;
const url =
  "mongodb+srv://suyash:124421@cluster0.meknw.mongodb.net/Brain-Inventory?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
