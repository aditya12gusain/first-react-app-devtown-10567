import "./App.css";
import ClassComponent from "./pages/ClassComponent";
import FunctionalComponent from "./pages/FunctionalComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// HOC layout

function App() {
  const company = "Devtown";

  const [name, setName] = useState("Aditya");

  return (
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route
        path="/functional-component"
        element={
          <FunctionalComponent
            name={name}
            age={20}
            company={company}
            setName={setName}
          />
        }
      />
    </Routes>
  );
}

export default App;
