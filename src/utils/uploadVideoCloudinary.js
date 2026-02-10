import cloudinary from "../config/cloudinary.js";

// Function to upload video to Cloudinary
const uploadVideoCloudinary = async (video, folder = "gallery/videos") => {
  try {
    // Buffer create karna: multer buffer or web file
    const buffer = video?.buffer
      ? video.buffer
      : Buffer.from(await video.arrayBuffer());

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "video" // Only video
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary video upload error:", error);
            return reject(new Error("Video upload failed"));
          }
          resolve({
            public_id: result.public_id,
            secure_url: result.secure_url
          });
        }
      );

      uploadStream.end(buffer);
    });
  } catch (err) {
    console.error("uploadVideoCloudinary failed:", err);
    throw new Error("Video upload failed");
  }
};

export default uploadVideoCloudinary;
