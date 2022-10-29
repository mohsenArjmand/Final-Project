import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/todoAction";

const AddTodoList = ({ dispatch }) => {
  let todolistName;


  let eventHandlerAdd = (e) => {
    if (todolistName.value.trim() !== "") {
      dispatch(addTodo(todolistName.value.trim()));
    }
  };

  return (
    <div>
      <input type="text" ref={node => (todolistName = node)} />
      {/* <input type="text" ref={node => (todolistName = node)} /> */}
      <button type="submit" onClick={eventHandlerAdd}>
       Click to Adding Todo
      </button>
    </div>
  );
};

export default connect()(AddTodoList);