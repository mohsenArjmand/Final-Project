let nextTodoId = 0;

export const addTodo = name => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  name
});

export const delTodo = id => ({
  type: "DEL_TODO",
  id
});
////////////////////////////
export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
export const typeFilter = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
};
