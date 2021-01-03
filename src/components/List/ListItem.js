import React from "react";
import { nanoid } from "nanoid";

const ListItem = ({ item }) => {
  return (
    <tr key={nanoid(10)} className="list-item" value={item.Name}>
      <td className="table-data"> {item.Name}</td>
      <td className="table-data"> {item.Project}</td>
      <td className="table-data"> {item.Difficulty}</td>
      <td className="table-data"> {item.Rating}</td>
    </tr>
  );
};

export default ListItem;
