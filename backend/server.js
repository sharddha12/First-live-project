require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // <-- THIS is required to parse JSON body

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// ✅ Routes
const contactRouter = require("./routes/contactroutes");
app.use("/contact", contactRouter);
const galleryRoutes = require('./routes/gallery');
app.use('/api/gallery', galleryRoutes);


// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
