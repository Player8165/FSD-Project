import React from 'react';
import './App.css';

// The data for the list of persons
const persons = [
  { id: 1, name: 'Aryan' },
  { id: 2, name: 'Bobby' },
  { id: 3, name: 'Soham' },
  { id: 4, name: 'Dhruvi' },
];

/**
 * A functional component to display a single person's details.
 * It receives 'person' object as a prop.
 */
const Person = ({ person }) => {
  return (
    <div className="person-card">
      <p><strong>ID:</strong> {person.id}</p>
      <p><strong>Name:</strong> {person.name}</p>
    </div>
  );
};

/**
 * The main App component that renders the list of persons.
 * It maps through the 'persons' array and creates a 'Person' component for each item.
 */
const App = () => {
  return (
    <div className="container">
      <h1 className="title">List of Persons</h1>
      <div className="person-list">
        {persons.map(person => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
