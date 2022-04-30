import { Dispatch, FC, SetStateAction } from "react";

import "./styles.css";
import Form from "../form";
import { Todo } from "../../models/models";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoCard: FC<Props> = ({ todo }) => {
  return (
    <Form handleAdd={() => console.log("object")} className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">{/* <AiFillEdit /> */}</span>
        <span className="icon">{/* <AiFillDelete /> */}</span>
        <span className="icon">{/* <MdDone /> */}</span>
      </div>
    </Form>
  );
};

export default TodoCard;
