import styles from "./index.module.css";

interface ButtonBackProps {
  handleBackClick: () => void;
}

const ButtonBack = ({ handleBackClick }: ButtonBackProps) => {
  return (
    <button className={styles.backLink} onClick={handleBackClick}>
      <span className={styles.backText}>Back</span>
    </button>
  );
};

export default ButtonBack;
