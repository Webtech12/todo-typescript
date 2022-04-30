import { useRef, useState, FormEvent, FC } from "react";
import "./App.css";

import Button from "./components/button";
import Form from "./components/form";
import InputField from "./components/inputField";
import TodoList from "./components/todoList";
import { Todo } from "./models/models";

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
      inputRef.current?.blur(); // not working
      console.log(todos);
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Form handleAdd={handleAdd} className="input">
        <InputField
          todo={todo}
          setTodo={setTodo}
          type="text"
          className="input__box"
          placeholder="Enter a Task"
        />
        <Button />
      </Form>
      <TodoList todos={todos} setTodos={setTodos} className="todos" />
    </div>
  );
};

export default App;
