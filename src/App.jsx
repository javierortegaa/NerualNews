import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return (
    <Router>
      <div className="bg-paper-bg min-h-screen">
        <MainLayout />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
