import styles from './Button.module.css';

type ButtonProps = {
  children?: string;
};

function Button({ children = 'Button' }: ButtonProps) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
