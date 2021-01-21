import React from "react";
import StudentData from "../StudentData/StudentData";
import StudentsList from "./List/StudentsList";
import BarChartAllStudents from "./BarChart/BarChartAllStudents";
import BarChartSingleStudent from "./BarChart/BarChartSingleStudent";

class DisplayStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: StudentData.students,
    };
  }

  render() {
    return (
      <div className="BarChartContainer">
        <BarChartAllStudents students={this.state.students} />
        <BarChartSingleStudent students={this.state.students} />
        <p>placeholder text</p>
        <div>
          {/* {console.log(this.state.students)} */}
          <StudentsList students={this.state.students} />
        </div>
      </div>
    );
  }
}

export default DisplayStudents;
