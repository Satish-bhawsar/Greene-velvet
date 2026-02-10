import cloudinary from "../config/cloudinary.js";

const uploadImageCloudinary = async (image, folder = "escortdirectory") => {
  const buffer = image?.buffer
    ? image.buffer
    : Buffer.from(await image.arrayBuffer());

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    ).end(buffer);
  });
};

export default uploadImageCloudinary;
