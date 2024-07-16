interface ButtonProps {
  children: React.ReactNode;
  styles: string;
}

const Button: React.FC<ButtonProps> = ({ children, styles }) => {
  return <button className={styles}>{children}</button>;
};

export default Button;
