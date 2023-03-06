import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  const [alert, setAlert] = useState("");
  
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.background = "#1b1b1b";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
  
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Enter The Text To analyze"
                mode={Mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={<About title="TextUtils" mode={Mode} />}
          ></Route>
          <Route
            path="*"
            element={<Error title="TextUtils" mode={Mode} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
