// src/App.js
import React, { useState } from 'react';
import './App.css';
import { searchUnsplashImages } from './api/unsplash';
import ImageCard from './components/ImageCard';

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const searchImages = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const results = await searchUnsplashImages(query);
      setImages(results);
    } catch (err) {
      setError("Could not fetch images. Please try again later.");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="App">
      <h1>Image Search</h1>
      <div className="content-container">
        <div className="search-box">
          <form onSubmit={searchImages}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for images..."
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>

        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="image-grid">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
