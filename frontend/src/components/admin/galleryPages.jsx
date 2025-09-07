import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(''); // Added category field
  const [description, setDescription] = useState(''); // Added description field
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:3000/api/gallery');
      setImages(res.data);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('image', newImage);

    try {
      await axios.post('http://localhost:3000/api/gallery/uploadGallery', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setTitle('');
      setCategory('');
      setDescription('');
      setNewImage(null);
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    }
  };

  const deleteImage = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await axios.delete(`/api/gallery/${id}`);
        fetchImages();
      } catch (error) {
        console.error('Error deleting image:', error);
        setError('Failed to delete image. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-handwriting">Loading Images...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg font-handwriting">{error}</p>
          <button
            onClick={fetchImages}
            className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-full font-serif"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-serif text-amber-800 mb-8 text-center">Gallery Management</h2>
      <form onSubmit={handleUpload} className="mb-12 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-serif mb-2">Image Title</label>
          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-serif mb-2">Category</label>
          <input
            type="text"
            placeholder="Category (e.g., Events, Sports)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-serif mb-2">Description</label>
          <textarea
            placeholder="Image Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-serif mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-2 rounded-lg font-serif hover:bg-amber-700 transition-colors"
        >
          Upload Image
        </button>
      </form>

      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(images) && images.length > 0 ? (
          images.map((img) => (
            <div key={img._id} className="gallery-item bg-white p-4 rounded-lg shadow-lg">
              <img
src={`http://localhost:3000/${img.src}`} 
                alt={img.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-serif text-gray-800">{img.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{img.category}</p>
              <p className="text-sm text-gray-600 mb-4">{img.description}</p>
              <button
                onClick={() => deleteImage(img._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-serif hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 font-serif col-span-full">
            No images found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminGallery;