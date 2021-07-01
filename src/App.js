import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Javascript" />
      <Todo text="Learn Redux" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
