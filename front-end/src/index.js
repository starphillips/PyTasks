import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
