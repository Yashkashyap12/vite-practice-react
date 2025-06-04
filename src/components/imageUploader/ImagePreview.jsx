const ImagePreview = ({ upload }) => {
  return (
    <div className="w-full">
      <div className="p-4 rounded-lg">
        <div className="h-52 bg-white shadow-inner rounded flex items-center justify-center text-gray-400 text-lg font-medium overflow-hidden">
          {upload ? (
            <img
              src={upload}
              alt="Uploaded preview"
              className="object-contain max-h-full max-w-full"
            />
          ) : (
            "No image selected"
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
