import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
