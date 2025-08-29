import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textpart from "./component/Textpart";
import Alert from "./component/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [labelText, setLabelText] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setLabelText("light");
      document.body.style.backgroundColor = "#1e1e1e";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      setLabelText("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  // --------- React Router createBrowserRouter setup ----------

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            title="Fahim"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
            labelText={labelText}
          />
          <Alert alert={alert} />
          <Textpart
            showAlert={showAlert}
            heading="Enter the text to analyze"
            mode={mode}
          />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            title="Fahim"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
            labelText={labelText}
          />
          <Alert alert={alert} />
          <About />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
