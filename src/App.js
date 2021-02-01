import "./App.css";
import DisplayStudents from "./components/DisplayStudents";
import Table from "./components/Table";
import Navbar from "./components/NavBar";
import BarChartSingleStudent from "./components/BarChart/BarChartSingleStudent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={DisplayStudents} exact />
        <Route exact path="/Table" component={Table} />
        <Route
          exact
          path="/student/:studentName"
          component={BarChartSingleStudent}
        />
      </div>
    </Router>
  );
}

export default App;
