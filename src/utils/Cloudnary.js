import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const uploadOnCloudnary = async () => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudnary
    const respone = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded sucssefully
    console.log("file is uploaded sucssefully", respone.url);
    return respone;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload opreation got faild
    return null;
  }
};

export { uploadOnCloudnary };
