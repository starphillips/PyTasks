import React, { useState, useEffect } from "react";
import './App.css';

// Function to sort tasks by date
const sortTasksByDueDate = (tasks) => {
  return tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

// Initialising the variables for each state 
function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);


  // useEffect is used to fetch data from API (SWAPI used to create mechanism before connecting to my backend)
  useEffect(() => {
    const fetchSWAPITasks = async () => {
      try {
        const response = await fetch("https://swapi.py4e.com/api/people/");
        const data = await response.json();

        // Maps data to task-like structure
        const swapiTasks = data.results.map((person, index) => ({
          id: `swapi-${index}`,
          name: person.name,
          description: `Height: ${person.height}, Mass: ${person.mass}`,
          dueDate: new Date().toISOString().split("T")[0],
        }));

        // Tasks are set into setTasks state and they have been updated based on the SWAPI data in task form
        setTasks(swapiTasks);
      } catch (error) { // error message in case any problems arise from fetching data
        console.error("Error fetching SWAPI data:", error);
      }
    };

    //Fuction call to prepopulate list
    fetchSWAPITasks();
  }, []); // useEffect closed where empty array is used to ensure it is only runs once (when opening app)

  // Function for form submission
  const handleFormSubmit = (e) => { // event object prevent page reload and to access the form's input values later
    e.preventDefault();

    // Collect data inputted by the user
    const taskName = e.target.taskName.value.trim();
    const taskDescription = e.target.taskDescription.value.trim();
    const taskDueDate = e.target.taskDueDate.value;

    // User must input all fields or alert message 
    if (!taskName || !taskDescription || !taskDueDate) {
      alert("All fields are required");
      return;
    }

    // Checks if user is updating a tasks
    const updatedTask = {
      id: editingTask ? editingTask.id : Date.now(), // if edited tasks exist it will keep its ID, if it is null - will give new ID
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
    };

    // Loops through current list to see what task is being updated. 
    setTasks((prevTasks) => { // prevTasks is current array of tasks
      if (editingTask) { 
        return prevTasks.map((task) =>
          task.id === editingTask.id ? updatedTask : task 
        ); // if the task's id matches the id of the task being edited (editingTask.id), replace it with the new updatedTask
      } else {
        return [...prevTasks, updatedTask]; // when editting is stopped, it sets Tasks with edited one, and the rest
      }
    });

    // Resets form when editting is done
    e.target.reset();
    setEditingTask(null);
    const modal = document.getElementById("createTask");
    modal.style.display = "none";
  };

  const openModal = (task = null) => { // task = null for new tasks
    setEditingTask(task); // if task exists (being edited) it will take this task values
    const modal = document.getElementById("createTask");
    modal.style.display = "flex"; // allows modal to appear on screen for creation or editing 
  };

  const closeModal = () => { 
    const modal = document.getElementById("createTask");
    modal.style.display = "none";
    setEditingTask(null); // once modal is closed, ensures no task is being edited
  };

  // Function to delete task
  const deleteTask = (id) => { // takes ID of selected tasks to know which one the user wants to delete
    const confirmDelete = window.confirm("Are you sure you want to delete this task?"); // pop up window to allow used to confirm
    if (confirmDelete) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Filter creates new array of tasks that doesn't include the deleted 
    }
  };

  // Mark Task as Done
  const markAsDone = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id); // Find the task by ID
    if (taskToComplete) {
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, taskToComplete]); // Add to completedTasks
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Remove from tasks
    }
  };

  // App Function will return this and render PyTask's UI 
  return (
    <div className="App">
      <h1>PyTasks</h1>
      <button id="openPopUp" onClick={() => openModal()}>Create a Task</button>

      {/* Popup for creating/editing tasks */}
      <div id="createTask" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <form id="taskForm" onSubmit={handleFormSubmit}>
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              defaultValue={editingTask ? editingTask.name : ""} // if editing a task this is prefilled.
              required
            />

            <label htmlFor="taskDescription">Task Description</label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              defaultValue={editingTask ? editingTask.description : ""}
              required
            ></textarea>

            <label htmlFor="taskDueDate">Due Date</label>
            <input
              type="date"
              id="taskDueDate"
              name="taskDueDate"
              defaultValue={editingTask ? editingTask.dueDate : ""}
              required
            />

            <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
          </form>
        </div>
      </div>

      {/* Task List */}
      <div className="task-list">
        <h2>Current Tasks</h2>
        {sortTasksByDueDate(tasks).map((task) => (
          <div key={task.id} className="task-item">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p><strong>Due:</strong> {task.dueDate}</p>
            <button onClick={() => openModal(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => markAsDone(task.id)}>Done</button>
          </div>
        ))}
      </div>

      {/* Completed Tasks List */}
      <div className="completed-task-list">
        <h2>Completed Tasks</h2>
        {completedTasks.map((task) => (
          <div key={task.id} className="task-item completed">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p><strong>Completed On:</strong> {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
