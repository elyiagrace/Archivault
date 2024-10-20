// EntryPage.js
import React, { useState } from 'react';

const EntryPage = ({ uploadedImage }) => {
  const [formData, setFormData] = useState({
    itemType: '',
    date: '',
    period: '',
    location: '',
    artists: '',
    materials: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.itemType) tempErrors.itemType = 'Item Type is required';
    if (!formData.date) tempErrors.date = 'Date is required';
    else if (isNaN(formData.date)) tempErrors.date = 'Date must be a number';
    if (!formData.period) tempErrors.period = 'Period is required';
    if (!formData.location) tempErrors.location = 'Location is required';
    if (!formData.artists) tempErrors.artists = 'Artist(s) is required';
    if (!formData.materials) tempErrors.materials = 'Material(s) is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        console.log(formData);
        // Simulate a backend submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmissionStatus('success');
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
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-12">
      {/* Uploaded Image Display */}
      {uploadedImage && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Previously Uploaded Image</h2>
          <div className="w-full h-auto flex justify-center">
            <img src={uploadedImage} alt="Uploaded Item" className="w-full h-auto max-w-lg rounded-lg shadow-md" />
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold mb-8 text-gray-800">New Entry</h1>

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
            {errors.itemType && <p className="mt-1 text-sm text-red-600">{errors.itemType}</p>}
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
            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
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
            {errors.period && <p className="mt-1 text-sm text-red-600">{errors.period}</p>}
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
            {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
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
            {errors.artists && <p className="mt-1 text-sm text-red-600">{errors.artists}</p>}
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
            {errors.materials && <p className="mt-1 text-sm text-red-600">{errors.materials}</p>}
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

        {submissionStatus === 'success' && <p className="mt-4 text-green-600">Entry submitted successfully!</p>}
        {submissionStatus === 'error' && <p className="mt-4 text-red-600">Submission failed. Please try again.</p>}
      </form>
    </div>
  );
};

export default EntryPage;
