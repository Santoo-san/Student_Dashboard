import logo from "./logo.svg";
import "./App.css";
import DisplayStudents from "./components/DisplayStudents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Student Dashboard</p>
        <DisplayStudents />
      </header>
    </div>
  );
}

export default App;
