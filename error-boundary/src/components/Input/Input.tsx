import styles from "./index.module.css";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../ErrorComponent";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input = ({ name, type, placeholder }: InputProps) => {
  return (
    <div>
      {age.school}
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

const WrappedInput = withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});

export default WrappedInput;
