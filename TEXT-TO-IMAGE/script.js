document.getElementById('imageForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const query = document.getElementById('query').value;
    const imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = ""; // Clear previous images
  
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=pXBuV_LqKTVHkwCwsdW8T6r2XV__G9mgOfMePdeFbIc`);
      if (!response.ok) throw new Error("Failed to fetch images.");
      const data = await response.json();
      const images = data.results;
      
      images.forEach((imgData) => {
        const img = document.createElement('img');
        img.src = imgData.urls.small;
        imageDisplay.appendChild(img);
      });
    } catch (error) {
      console.error("Error fetching images:", error);
      imageDisplay.innerHTML = "<p>Sorry, an error occurred. Please try again.</p>";
    }
  });
  