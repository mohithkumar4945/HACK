// src/components/ImageCard.js
import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => (
  <div className="image-card">
    <img src={image.urls.small} alt={image.alt_description} />
    <div className="image-overlay">
      <p>{image.alt_description || "Untitled Image"}</p>
    </div>
  </div>
);

export default ImageCard;
