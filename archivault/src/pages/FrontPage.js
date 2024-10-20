// FrontPage.js
import React, { useState, useRef } from 'react';
import { BookOpen, Grid, Award } from 'lucide-react';

const FrontPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [formData, setFormData] = useState({
    itemType: '',
    date: '',
    period: '',
    location: '',
    artists: '',
    materials: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateEntry = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const areAllFieldsFilled = () => {
    return Object.values(formData).every(field => field.trim() !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate backend submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if all fields are filled
      const allFieldsFilled = areAllFieldsFilled();

      if (allFieldsFilled) {
        setSubmissionStatus('allEntries');
        // Navigate or update "All Entries"
        console.log('Redirect to All Entries');
      } else {
        setSubmissionStatus('unfinishedEntries');
        // Navigate or update "Unfinished Entries"
        console.log('Redirect to Unfinished Entries');
      }

      // Reset the form
      setFormData({
        itemType: '',
        date: '',
        period: '',
        location: '',
        artists: '',
        materials: ''
      });

    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
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
        <h1 className="text-3xl font-serif text-stone-800 mb-8">Museums collection management</h1>

        <div className="bg-white p-8 rounded-lg shadow-md border border-stone-200">
          <h2 className="text-xl font-semibold text-stone-700 mb-6">Document Your Visit</h2>
          <div className="flex flex-col items-center justify-center border border-stone-300 rounded-lg p-12 bg-stone-50">
            {/* Image Upload Section */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
            {uploadedImage && (
              <img src={uploadedImage} alt="Uploaded" className="w-full h-auto max-w-md mb-6 object-cover shadow-md rounded-lg" />
            )}
            <button
              onClick={handleCreateEntry}
              className="bg-stone-800 text-stone-100 px-6 py-2 rounded text-sm font-medium hover:bg-stone-700 transition duration-300"
            >
              {uploadedImage ? 'Change image' : 'Choose an image to create an entry'}
            </button>
          </div>

          {uploadedImage && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-6 text-stone-800">Create an Entry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type</label>
                    <input
                      id="itemType"
                      name="itemType"
                      value={formData.itemType}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                      id="date"
                      name="date"
                      type="number"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="period" className="block text-sm font-medium text-gray-700">Period</label>
                    <input
                      id="period"
                      name="period"
                      value={formData.period}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="artists" className="block text-sm font-medium text-gray-700">Artist(s)</label>
                    <input
                      id="artists"
                      name="artists"
                      value={formData.artists}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="materials" className="block text-sm font-medium text-gray-700">Material(s)</label>
                    <input
                      id="materials"
                      name="materials"
                      value={formData.materials}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 rounded-md text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Entry'}
                </button>

                {submissionStatus === 'allEntries' && <p className="mt-4 text-green-600">Entry submitted to All Entries!</p>}
                {submissionStatus === 'unfinishedEntries' && <p className="mt-4 text-yellow-600">Entry moved to Unfinished Entries!</p>}
                {submissionStatus === 'error' && <p className="mt-4 text-red-600">Submission failed. Please try again.</p>}
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FrontPage;
