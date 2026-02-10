import cloudinary from "../config/cloudinary.js";

// Function to upload video to Cloudinary
const uploadVideoCloudinary = async (video, folder = "escortdirectory/videos") => {
  const buffer = video?.buffer
    ? video.buffer
    : Buffer.from(await video.arrayBuffer());

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "video" // Important for videos
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    ).end(buffer);
  });
};

export default uploadVideoCloudinary;
