import React from "react";
import { nanoid } from "nanoid";

const ListItem = ({ item }) => {
  return (
    <a key={nanoid(10)} className="student-name" href={`/Student/${item}`}>
      {" "}
      {item}
    </a>
  );
};

export default ListItem;
