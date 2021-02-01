import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const ListItem = ({ studentName }) => {
  return (
    <div className="listItemDiv">
      <Link
        key={nanoid(10)}
        className="studentName"
        to={`/student/${studentName}`}
      >
        <li className="list-item">{studentName}</li>
      </Link>
    </div>
  );
};

export default ListItem;
