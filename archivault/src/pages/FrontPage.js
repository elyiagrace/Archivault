import React, { useState, useCallback } from 'react';
import { BookOpen, Grid, Award, Upload } from 'lucide-react';

const FrontPage = () => {
  const [image, setImage] = useState(null);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, []);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files[0];
    handleFile(file);
  }, []);

  const handleFile = (file) => {
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("File is not an image.");
    }
  };

  return (
    <div className="flex h-screen bg-stone-100">
      {/* Left Navigation Panel */}
      <nav className="w-64 bg-stone-800 text-stone-200 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-serif mb-8 text-stone-100">Museum Archive</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center p-2 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition duration-300">
                <BookOpen className="mr-3 h-5 w-5" />
                Unfinished Entries
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition duration-300">
                <Grid className="mr-3 h-5 w-5" />
                All Entries
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition duration-300">
                <Award className="mr-3 h-5 w-5" />
                Exhibits
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-3xl font-serif text-stone-800 mb-8">Welcome to the Digital Archives</h1>
        <div className="bg-white p-8 rounded-lg shadow-md border border-stone-200">
          <h2 className="text-xl font-semibold text-stone-700 mb-6">Document Your Visit</h2>
          <div 
            className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 rounded-lg p-12 bg-stone-50"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {image ? (
              <img src={image} alt="Uploaded" className="max-w-full max-h-64 mb-4" />
            ) : (
              <Upload className="w-16 h-16 text-stone-400 mb-6" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="bg-stone-800 text-stone-100 px-6 py-2 rounded text-sm font-medium hover:bg-stone-700 transition duration-300 cursor-pointer"
            >
              {image ? 'Change Image' : 'Drop Image or Click to Upload'}
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FrontPage;