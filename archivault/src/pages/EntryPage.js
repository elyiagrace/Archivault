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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.itemType) tempErrors.itemType = "Item Type is required";
    if (!formData.date) tempErrors.date = "Date is required";
    else if (isNaN(formData.date)) tempErrors.date = "Date must be a number";
    if (!formData.period) tempErrors.period = "Period is required";
    if (!formData.location) tempErrors.location = "Location is required";
    if (!formData.artists) tempErrors.artists = "Artist(s) is required";
    if (!formData.materials) tempErrors.materials = "Material(s) is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Here you would typically send the data to your backend
      setSubmissionStatus('success');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">New Entry</h1>
      
      {uploadedImage && (
        <img src={uploadedImage} alt="Uploaded Item" className="max-w-md mb-6 rounded-lg shadow-md" />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type</label>
          <input
            id="itemType"
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="artists" className="block text-sm font-medium text-gray-700">Artist(s)</label>
          <input
            id="artists"
            name="artists"
            value={formData.artists}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.materials && <p className="mt-1 text-sm text-red-600">{errors.materials}</p>}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Entry
        </button>
      </form>

    </div>
  );
};

export default EntryPage;