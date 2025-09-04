const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    src: { type: String, required: true }, // URL or path to the image
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: String,
    uploadDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
  
});

module.exports = mongoose.model('Image', imageSchema);