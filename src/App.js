import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vedum" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/antonina-dulama-682a2aa5/"
            target="_blank"
            rel="noreferrer"
          >
            Antonina Dulama
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/DulamaA/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://stunning-elf-228ee1.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
