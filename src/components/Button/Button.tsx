interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="w-278 h-60 flex items-center rounded-16 px-30 py-10 bg-blue text-white text-18 leading-22 font-600">
      {text}
      <span className="ml-auto">{'>'}</span>
    </button>
  );
};

export default Button;
