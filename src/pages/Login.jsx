import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Contoh validasi sederhana
    if (email === 'sarah.santoso@gmail.com' && password === '123456') {
      navigate('/task'); // Pindah ke halaman /task
    } else {
      alert('Email atau password salah.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-center text-2xl font-bold text-purple-400">VOCA</h1>
        <h2 className="text-center text-xl text-white mb-6">Task</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-purple-400 rounded bg-gray-900 text-white"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border border-purple-400 rounded bg-gray-900 text-white"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
