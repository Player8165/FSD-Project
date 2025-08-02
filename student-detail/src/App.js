import React from 'react';
import './App.css';

/**
 * A functional component to display a single student's details.
 * It receives 'student' object as a prop from the parent.
 */
const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3 className="student-name">{student.name}</h3>
      <p className="student-info">Age: {student.age}</p>
      <p className="student-info">Grade: {student.grade}</p>
    </div>
  );
};

/**
 * The parent functional component that defines the student data
 * and passes it as a prop to the StudentCard component.
 */
const App = () => {
  // Student data defined in the parent component
  const student = {
    name: 'Soham Patel',
    age: 20,
    grade: '3rd Year B.tech I.T.'
  };

  return (
    <div className="container">
      <h1 className="title">Student Details</h1>
      <StudentCard student={student} />
    </div>
  );
};

export default App;
