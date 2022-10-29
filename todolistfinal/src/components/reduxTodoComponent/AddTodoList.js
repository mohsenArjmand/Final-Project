import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/todoAction";

const AddTodoList = ({ dispatch }) => {
  let todolistName;


  let eventHandlerAdd = (e) => {
    console.log(e)
    console.log('dispatch',dispatch)
    if (todolistName.value.trim() !== "") {
      dispatch(addTodo(todolistName.value.trim()),"ADD_TODO");
      console.log('dispatch',dispatch)
      console.log('value',todolistName.value.trim())
    }
  };

  return (
    <React.Fragment>
      <input type="text" ref={node => (todolistName = node)} />
      <button type="submit" onClick={eventHandlerAdd}>
        Add Todo
      </button>
    </React.Fragment>
  );
  // return (
  //   <div>
  //     <input type="text" ref={node => (todolistName = node)} />
  //     {/* <input type="text" ref={node => (todolistName = node)} /> */}
  //     <button type="submit" onClick={eventHandlerAdd}>
  //      Click to Adding Todo
  //     </button>
  //   </div>
  // );
};

export default connect()(AddTodoList);