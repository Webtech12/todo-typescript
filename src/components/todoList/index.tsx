import { Dispatch, FC, SetStateAction } from "react";

import "./styles.css";
import TodoCard from "../todoCard";
import { Todo } from "../../models/models";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  className: string;
}

const TodoList: FC<Props> = ({ todos, setTodos, className }) => {
  return (
    <div className={className}>
      {todos.map((todo) => (
        <TodoCard todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
