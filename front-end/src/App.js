import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';


// Function to sort tasks by date
const sortTasksByDueDate = (tasks) => {
  return tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

function App() {
  // Store tasks as an array of JSON objects
  const [tasks, setTasks] = useState([]);





  // Function for form submission handling
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Collect data inputted by the user
    const taskName = e.target.taskName.value.trim(); // Trim any blank space
    const taskDescription = e.target.taskDescription.value.trim();
    const taskDueDate = e.target.taskDueDate.value;

    // User must input all fields
    if (!taskName || !taskDescription || !taskDueDate) {
      alert("All fields are required");
      return;
    }

    // Create a task object - payload
    const newTask = {
      id: Date.now(), // Object ID named by the current time
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
    };

    // Add the payload to the console to identify what has been added by the user
    console.log("New Task:", newTask);

    // Update state to include the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear form after submission
    e.target.reset();

    const modal = document.getElementById("createTask");
    modal.style.display = "none";
  };

  const openModal = () => {
    const modal = document.getElementById("createTask");
    modal.style.display = "flex";
  };

  const closeModal = () => {
    const modal = document.getElementById("createTask");
    modal.style.display = "none";
  };

  return (
    <div className="App">
      <h1>PyTasks</h1>
      <button id="openPopUp" onClick={openModal}>Create a Task</button>

      {/* Popup for creating the Tasks */}
      <div id="createTask" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <form id="taskForm" onSubmit={handleFormSubmit}>
            <label htmlFor="taskName">Task Name</label>
            <input type="text" id="taskName" name="taskName" required />

            <label htmlFor="taskDescription">Task Description</label>
            <textarea id="taskDescription" name="taskDescription" required></textarea>

            <label htmlFor="taskDueDate">Due Date</label>
            <input type="date" id="taskDueDate" name="taskDueDate" required />

            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>

      {/* List of Tasks to be displayed on index */}
      <div className="task-list">
        {sortTasksByDueDate(tasks).map((task) => (
          <div key={task.id} className="task-item">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p><strong>Due:</strong> {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

packet.results[0].films[0]

