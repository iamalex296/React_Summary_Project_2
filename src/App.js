import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Javascript" />
      <Todo text="Learn Redux" />
    </div>
  );
}

export default App;
