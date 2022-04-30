import { FC, forwardRef, Dispatch, SetStateAction } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  className: string;
  type: string;
  placeholder: string;
}

const InputField: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ todo, setTodo, className, type, placeholder }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={todo}
        ref={ref}
        onChange={(e) => setTodo(e.target.value)}
        className={className}
      />
    );
  }
);

export default InputField;
