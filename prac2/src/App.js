import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Framer Motion Variants for the parent list container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger children animations
    },
  },
};

// Framer Motion Variants for each list item
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  },
};

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Handle toggling the completion status of a todo
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-container">
      <div className="content-wrapper">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <h1>CYBER-TASKS</h1>
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddTodo();
                }
              }}
              placeholder="Enter your task..."
            />
            <motion.button
              onClick={handleAddTodo}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--neon-green-hover)' }}
              whileTap={{ scale: 0.9 }}
            >
              Add
            </motion.button>
          </div>
          <motion.ul
            className="todo-list"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {todos.map((todo) => (
                <motion.li
                  key={todo.id}
                  className="todo-item"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className={todo.completed ? 'completed' : ''}
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    {todo.text}
                  </span>
                  <motion.button
                    onClick={() => handleDeleteTodo(todo.id)}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="delete-btn"
                  >
                    🗑️
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default App;