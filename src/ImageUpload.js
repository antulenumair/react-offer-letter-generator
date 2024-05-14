import React from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onImageUpload }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result, file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload-container">
      <input type="file" accept="image/*" onChange={handleImageChange} className="image-input" />
    </div>
  );
};

export default ImageUpload;
