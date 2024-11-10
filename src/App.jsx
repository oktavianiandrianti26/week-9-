import React from 'react';
import Login from './pages/Login';
import TaskPage from './pages/Task';
import UpdateProfile from './pages/UpdateProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Task" element={<TaskPage />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
