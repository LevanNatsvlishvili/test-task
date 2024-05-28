import InlineSVG from 'react-inlinesvg';

interface InputProps {
  icon: string;
  placeholder: string;
}

const Input = ({ icon, placeholder }: InputProps) => {
  return (
    <div className="w-fit flex flex-grow items-center">
      <InlineSVG src={icon} />
      <input
        className="w-full ml-16 placeholder-rukh text-rukh text-14 leading-18 tracking-[0.2px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
