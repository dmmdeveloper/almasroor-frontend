export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Al-masroor"); // Set this in Cloudinary settings
  
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dfyfvcrkd/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error(`Cloudinary Upload Failed: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.secure_url; // Return the uploaded image URL
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      return null;
    }
  };
  