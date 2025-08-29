import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiImage, FiTag, FiMapPin } from 'react-icons/fi';
import './CreatePost.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    location: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { id: 'nature', name: 'Nature', icon: '🌿' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'art', name: 'Art', icon: '🖼️' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🌟' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedImage) {
      alert('Please select an image for your post');
      return;
    }

    if (!formData.title.trim()) {
      alert('Please enter a title for your post');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect to home
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post">
      <div className="container">
        <div className="create-post-header">
          <h1>Create New Post</h1>
          <p>Share something amazing with the Clipnest community</p>
        </div>

        <div className="create-post-form-container">
          <form onSubmit={handleSubmit} className="create-post-form">
            {/* Image Upload Section */}
            <div className="image-upload-section">
              <label htmlFor="image-upload" className="image-upload-label">
                {imagePreview ? (
                  <div className="image-preview-container">
                    <img src={imagePreview} alt="Preview" className="image-preview" />
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={removeImage}
                      aria-label="Remove image"
                    >
                      <FiX />
                    </button>
                  </div>
                ) : (
                  <div className="upload-placeholder">
                    <FiImage className="upload-icon" />
                    <span>Click to upload image</span>
                    <small>JPG, PNG, GIF up to 10MB</small>
                  </div>
                )}
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="image-input"
                required
              />
            </div>

            {/* Form Fields */}
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Post Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Give your post a catchy title..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell the story behind your post..."
                  rows="4"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="tags" className="form-label">
                    Tags
                  </label>
                  <div className="tags-input-wrapper">
                    <FiTag className="tags-icon" />
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Add tags separated by commas..."
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <div className="location-input-wrapper">
                  <FiMapPin className="location-icon" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Where was this taken?"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/')}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Post...' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
