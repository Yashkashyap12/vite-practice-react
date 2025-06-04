import React, { useState } from "react";
import ImagePreview from "./ImagePreview";

const ImageUploader = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      UploadIamgeHandler(file);
    }
  };

  const UploadIamgeHandler = (file) => {
    setUploadImage(URL.createObjectURL(file));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col md:flex-row gap-8 p-6 w-full max-w-6xl">
        <div className="bg-white shadow-xl rounded-lg p-10 flex-1 min-h-[300px]">
          <label
            htmlFor="fileInput"
            className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-300 transition-all cursor-pointer flex items-center justify-center"
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={ShowImageHandler}
            />
            <span className="text-gray-600 font-medium text-lg">
              Click or drag to upload your image
            </span>
          </label>
        </div>
        <div className="bg-gray-100 rounded-lg h-full">
          <ImagePreview upload={uploadImage} />
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
