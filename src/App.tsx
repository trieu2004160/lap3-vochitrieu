import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login.jsx";
import Signup from "../src/pages/Signup/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
