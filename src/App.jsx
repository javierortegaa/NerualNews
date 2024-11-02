import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./components/MainLayout";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return (
    <div className="bg-paper-bg min-h-screen">
      <MainLayout />
    </div>
  );
}

export default App;
