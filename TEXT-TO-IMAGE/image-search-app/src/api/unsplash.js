// src/api/unsplash.js

const ACCESS_KEY = "pXBuV_LqKTVHkwCwsdW8T6r2XV__G9mgOfMePdeFbIc"; // Replace with Unsplash Access Key

export const searchUnsplashImages = async (query) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`);
  if (!response.ok) throw new Error("Error fetching images.");
  const data = await response.json();
  return data.results;
};
