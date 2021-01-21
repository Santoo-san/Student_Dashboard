import React from "react";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";

class StudentsList extends React.Component {
  render() {
    const { students, readonly, handleClickItem } = this.props;
    const findStudents = students.map((a) => a.Name);
    const filterStudents = [...new Set(findStudents)];
    filterStudents.sort();

    const listItems = filterStudents
      ? filterStudents.map((item) => (
          <ListItem
            key={nanoid(10)}
            item={item}
            readonly={readonly}
            clickItem={handleClickItem}
          />
        ))
      : " ";

    return <React.Fragment>{listItems}</React.Fragment>;
  }
}

export default StudentsList;
