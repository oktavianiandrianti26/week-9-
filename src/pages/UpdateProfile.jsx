import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const navigate = useNavigate();

  // State untuk form input
  const [profileURL, setProfileURL] = useState('');
  const [name, setName] = useState('Sarah Santoso');
  const [email, setEmail] = useState('sarah.santoso@gmail.com');
  const [password, setPassword] = useState('');

  // Fungsi untuk navigasi kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate(-1);
  };

  // Fungsi untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    navigate('/task'); // Navigasi ke halaman Task
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Form Container */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        {/* Header dengan tombol kembali */}
        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="text-white mr-2">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h2 className="text-white text-xl font-semibold">Edit Profile</h2>
        </div>

        {/* Icon user */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-500 rounded-full p-4">
            <i className="fas fa-user text-4xl text-purple-200"></i>
          </div>
        </div>

        {/* Form Edit Profile */}
        <form onSubmit={handleSubmit}>
          {/* Input URL Profile */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Profile URL</label>
            <input
              type="text"
              placeholder="Enter Image URL"
              value={profileURL}
              onChange={(e) => setProfileURL(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-purple-500 rounded focus:outline-none focus:border-purple-700"
            />
          </div>

          {/* Input Name */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-purple-500 rounded focus:outline-none focus:border-purple-700"
            />
          </div>

          {/* Input Email */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-purple-500 rounded focus:outline-none focus:border-purple-700"
            />
          </div>

          {/* Input Password */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-purple-500 rounded focus:outline-none focus:border-purple-700"
            />
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none"
          >
            <i className="fas fa-check mr-2"></i>Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
