import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  const initialValues = {
    fullName: "",
    age: "",
    email: "",
    password: "",
  };
  return (
    <div className="App">
      <RegistrationForm initialValues={initialValues} />
    </div>
  );
}

export default App;
