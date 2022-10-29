import React from "react";

const TodoListItem = ({ name, complete, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: complete ? "line-through" : "none" }}
    >
      {name}
    </li>
  );
};

export default TodoListItem;
// const TodoListItem = ({ id,name, complete, onClick }) => {
//   return (
//     <li key={id}
//       onClick={onClick}
//       style={{ textDecoration: complete ? "color" : "pink" }}
//     >
//       {name} 
//     </li>
//   );
// };

// export default TodoListItem;