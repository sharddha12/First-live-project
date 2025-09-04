const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// Get all images
router.get('/', galleryController.getAllImages);

// Get single image by ID
router.get('/:id', galleryController.getImageById);

// Add new image (admin only)
router.post('/', galleryController.addImage);

module.exports = router;