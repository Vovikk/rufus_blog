const Button = ({ label, className }) => {
  const baseClass =
    "px-6 py-4 bg-purple text-white font-bold rounded-[1.75rem] w-fit";
  return <button className={`${baseClass} ${className}`}>{label}</button>;
};

export default Button;
