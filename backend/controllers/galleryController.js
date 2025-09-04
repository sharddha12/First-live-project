const Image = require('../models/Image');

// Get all images
exports.getAllImages = async (req, res) => {
    try {
        const images = await Image.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get single image
exports.getImageById = async (req, res) => {
    try {
        const image = await Image.findOne({ id: req.params.id });
        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }
        res.json(image);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Add new image
exports.addImage = async (req, res) => {
    try {
        const { src, title, category, description, uploadDate } = req.body;
        const maxId = await Image.findOne().sort({ id: -1 }).select('id');
        const newId = maxId ? maxId.id + 1 : 1;

        const newImage = new Image({
            id: newId,
            src, // Use 'image' here if you chose that field name
            title,
            category,
            description,
            uploadDate: new Date(uploadDate),
            createdAt: new Date()
        });

        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error adding image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};