require ('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});



const galleryRouter = require('./routes/gallery');
const contactRouter = require('./routes/contact');
const alumniRouter = require('./routes/alumni');
const academicRouter = require('./routes/academic');
const aboutRouter = require('./routes/about');
const homeRouter = require('./routes/home');

app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use('/alumni', alumniRouter);
app.use('/academic', academicRouter);
app.use('/about', aboutRouter);
app.use('/home', homeRouter);
const PORT = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 