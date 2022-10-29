const todoReducer = (state = [], action) => {
  console.log("state : " ,state)
  switch (action.type) {

    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id++,
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
  console.log("state : " ,state)
console.log(",action : ",action)
};
export default todoReducer;
