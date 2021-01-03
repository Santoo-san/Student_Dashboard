import React from "react";
import StudentData from "../StudentData/StudentData";
import StudentsList from "./List/StudentsList";

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
        {console.log(this.state.students)}
        <StudentsList students={this.state.students} />
        <p> render DisplayStudents</p>
      </div>
    );
  }
}

export default DisplayStudents;
