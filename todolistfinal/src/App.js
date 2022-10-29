import './App.css';
import AddTodoList from './components/reduxTodoComponent/AddTodoList';
import TodoList from './components/reduxTodoComponent/TodoList';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h4> whithRedux</h4>
      <AddTodoList />
      <TodoList />
      <h4> whithoutRedux</h4>
      <Todos></Todos>
    </div>
  );
}

export default App;
