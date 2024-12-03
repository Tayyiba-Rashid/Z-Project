import Header from '@/components/header';
import Image from 'next/image';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const ImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(true);

  

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <>
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-zimo-theme">Upload Images</h2>

      <div className="w-full max-w-md">
        <label className="flex items-center justify-center w-full p-4 space-x-2 bg-gray-200 border border-dashed rounded-md cursor-pointer hover:bg-gray-300">
          <FaUpload className="text-zimo-theme" />
          <span className="text-sm font-medium text-gray-700">Choose Images</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <button
          type="button"
          className="w-full px-4 py-2 mt-4 font-semibold text-white rounded-md bg-zimo-theme hover:bg-zimo-theme-dark"
        >
          Upload
        </button>
      </div>

      <div className="w-full max-w-md mt-6 space-y-2">
        {uploadedImages.length > 0 && (
          <h3 className="text-sm font-semibold text-gray-700">Uploaded Images:</h3>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {uploadedImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`uploaded ${index}`}
              className="w-full h-32 rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageUpload;
