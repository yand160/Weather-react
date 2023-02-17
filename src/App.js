import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded with ❤️ by Yandia Alexis and is
          <strong>
            <a
              href="https://github.com/yand160/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-sourced on Github
            </a>{" "}
          </strong>
        </footer>
      </div>
    </div>
  );
}
