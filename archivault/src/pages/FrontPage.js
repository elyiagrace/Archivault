// FrontPage.js
import React, { useState, useRef } from 'react';
import { BookOpen, Grid, Award } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Set the uploaded image data
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 URL
    }
  };

  const handleCreateEntry = () => {
    // Trigger the file input click when "Create an entry" is pressed
    if (!uploadedImage) {
      fileInputRef.current.click(); // If no image is uploaded, open file input
    } else {
      // Navigate to the EntryPage and pass the uploaded image as state
      navigate('/entry', { state: { uploadedImage } });
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
        <h1 className="text-3xl font-serif text-stone-800 mb-8">Museums collection management</h1> {/* Updated title */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-stone-200">
          <h2 className="text-xl font-semibold text-stone-700 mb-6">Document Your Visit</h2>
          <div className="flex flex-col items-center justify-center border border-stone-300 rounded-lg p-12 bg-stone-50">
            {/* Image Upload Section */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef} // Assign the ref to this input
              className="hidden" // Hide the file input element
            />
            {uploadedImage && (
              <img src={uploadedImage} alt="Uploaded" className="w-32 h-32 rounded-full mb-6 object-cover shadow-md" />
            )}
            <button
              onClick={handleCreateEntry} // Trigger file input on click
              className="bg-stone-800 text-stone-100 px-6 py-2 rounded text-sm font-medium hover:bg-stone-700 transition duration-300"
            >
              {uploadedImage ? 'Create an entry' : 'Choose an image to create an entry'} {/* Update button text based on state */}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FrontPage;
