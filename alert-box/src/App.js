import React, { useState } from 'react';
import './App.css';

// SVG for the close button icon.
const X = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// The main App component.
const App = () => {
  // State hook to control the visibility of the alert.
  const [showAlert, setShowAlert] = useState(false);

  // Function to show the alert.
  const handleButtonClick = () => {
    setShowAlert(true);
  };

  // Function to hide the alert.
  const handleCloseClick = () => {
    setShowAlert(false);
  };

  return (
    <div className="container">
      {/* The button that triggers the alert */}
      <button
        onClick={handleButtonClick}
        className="alert-button"
      >
        Show Alert
      </button>

      {/* Conditionally render the alert component if showAlert is true */}
      {showAlert && (
        <div
          role="alert"
          className="alert-container"
        >
          <div className="alert-content">
            <h3 className="alert-title">Important Message</h3>
            <p className="alert-text">This is the alert you were looking for. Click the 'X' to close it.</p>
          </div>
          {/* Close button for the alert */}
          <button
            onClick={handleCloseClick}
            className="alert-close-button"
            aria-label="Close alert"
          >
            <X className="alert-close-icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
