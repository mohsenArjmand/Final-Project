const todoReducer = (state = [], action) => {

  switch (action.type) {

    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          name: action.name
        }
      ];


    case "DEL_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );

    default:
      return state;
  }
};
export default todoReducer;
