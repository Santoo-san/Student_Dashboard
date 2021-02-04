import React from "react";
import StudentData from "../StudentData/StudentData";
import StudentsList from "./List/StudentsList";
import BarChartAllStudents from "./Charts/BarChartAllStudents";

class DisplayStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: StudentData.students,
    };
  }

  render() {
    return (
      <div className="Container">
        <BarChartAllStudents students={this.state.students} />
        <h4 className="titleStudentslist">Kies een student</h4>
        <ul className="studentListContainer">
          <StudentsList students={this.state.students} />
        </ul>
      </div>
    );
  }
}

export default DisplayStudents;
