import React from "react";
import StudentData from "../StudentData/StudentData";
import StudentsList from "./List/StudentsList";
import BarChart from "./BarChart/BarChart";

class DisplayStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: StudentData.students,
    };
  }

  render() {
    return (
      <div>
        <BarChart students={this.state.students} />
        <table>
          <tbody>
            {/* {console.log(this.state.students)} */}
            <StudentsList students={this.state.students} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayStudents;
