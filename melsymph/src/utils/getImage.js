const getImage = async (imageName) => {
  try {
    const response = await fetch(`http://localhost:3005/get-image/${imageName}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const imageData = await response.text();
    return imageData; // Return the raw base64-encoded image data
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export default getImage;
