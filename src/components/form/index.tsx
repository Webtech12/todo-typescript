import { FormEvent, FC } from "react";
import "./styles.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  handleAdd: (e: FormEvent) => void;
  className: string;
}

const Form: FC<Props> = ({ children, handleAdd, className }) => {
  return (
    <form
      className={className}
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      {children}
    </form>
  );
};

export default Form;
