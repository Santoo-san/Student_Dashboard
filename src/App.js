import "./App.css";
import DisplayStudents from "./components/DisplayStudents";
import Graph from "./components/Charts/Graph";
import Navbar from "./components/NavBar";
import BarChartSingleStudent from "./components/Charts/BarChartSingleStudent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={DisplayStudents} exact />
        <Route exact path="/Graph" component={Graph} />
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
