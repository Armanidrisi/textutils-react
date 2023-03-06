import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
export default function Navbar(props) {
  const [progress, setProgress] = useState(0);
  const handleUpClick = () => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  };
  return (
    <div>
      <LoadingBar
        color="#047aed"
        progress={progress}
        loaderSpeed={200}
        transitionTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleUpClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleUpClick}>
                  About
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode{" "}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
