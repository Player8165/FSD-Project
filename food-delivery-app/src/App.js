import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line for Bootstrap CSS
import Login from "./screens/Login";
import Signup from "./screens/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
<<<<<<< HEAD
          <Route exact path="/createuser" element={<Signup/>} />
=======
>>>>>>> 34c9c5ee11b4127945a3ece0fab294bc22ece938
        </Routes>
      </div>
    </Router>
  );
}

export default App;