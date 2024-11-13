import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">

      <body>
        <h1> PyTasks </h1>
      </body>

    </div>
  );
}

// Get modal element
var modal = document.getElementById("createTask");

// Get button that opens the popup
var btn = document.getElementById("openPopUp");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the popup
btn.onclick = function () {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside the popup, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



export default App;
