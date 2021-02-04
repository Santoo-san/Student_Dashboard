import React from "react";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";

class StudentsList extends React.Component {
  render() {
    const { students } = this.props;
    const findStudents = students.map((a) => a.Name);
    const filterStudents = [...new Set(findStudents)];
    filterStudents.sort();

    const listItems = filterStudents
      ? filterStudents.map((item) => (
          <ListItem key={nanoid(10)} studentName={item} />
        ))
      : " ";

    return <React.Fragment>{listItems}</React.Fragment>;
  }
}

// const Child = () => {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// };

export default StudentsList;
