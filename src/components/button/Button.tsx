interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
