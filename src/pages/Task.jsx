import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEdit, FaSignOutAlt, FaPlus, FaCheck, FaTrash } from 'react-icons/fa';

const Task = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    { id: 1, text: 'To study React fundamentals', done: false },
  ]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    const completedTask = tasks.find((task) => task.id === taskId);
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, { ...completedTask, done: true }]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex space-x-8 p-8">
      <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center space-y-4">
        <div className="bg-purple-500 rounded-full w-24 h-24 flex items-center justify-center">
          <FaUser className="text-4xl text-gray-900" />
        </div>
        <div className="text-center">
          <p className="text-lg">Welcome Back, <span className="font-bold">Sarah!</span></p>
        </div>
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded flex items-center space-x-2"
          onClick={() => navigate('/update-profile')}
        >
          <FaEdit />
          <span>Edit Profile</span>
        </button>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded flex items-center space-x-2"
          onClick={() => navigate('/')}
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="bg-gray-700 text-white py-2 px-4 rounded w-full focus:outline-none"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="bg-purple-500 text-white py-2 px-4 rounded" onClick={handleAddTask}>
            <FaPlus />
          </button>
        </div>

        <div>
          <p className="mb-4">Tasks to do - {tasks.length}</p>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="bg-gray-700 p-4 rounded flex justify-between items-center">
                <span>{task.text}</span>
                <div className="flex space-x-2">
                  <FaCheck
                    className="text-purple-500 cursor-pointer"
                    onClick={() => handleCompleteTask(task.id)}
                  />
                  <FaTrash
                    className="text-gray-500 cursor-pointer"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4">Done - {completedTasks.length}</p>
          {completedTasks.map((task) => (
            <div key={task.id} className="bg-gray-700 p-4 rounded">
              <span className="line-through text-green-500">{task.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
