import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { delTodo } from "../redux/todoAction";

const TodoList = ({ todos, delTodo }) => {
  return (
    <ul>
      {todos != null &&
        todos.map(todo => (
          <TodoListItem key={todo.id} {...todo} onClick={() => delTodo(todo.id)} />
        ))}
    </ul>
  );
};

const filterTodos = (todos, filter) => {
  console.log(todos);
  switch (filter) {
    case "SHOW_COMPLETE":
      return todos.filter(todo => todo.complete == true);
    case "SHOW_ACTIVE":
      return todos.filter(todo => todo.complete == false);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.filterTodo)
});

const mapDispatchToProps = dispatch => ({
  delTodo: id => dispatch(delTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
