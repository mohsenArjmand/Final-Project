import React from "react";

const TodoListItem = ({ name, complete, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: complete ? "color" : "pink" }}
    >
      {name}
    </li>
  );
};

export default TodoListItem;