type ButtonProps = {
  filled: boolean;
  children: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ filled, children, className, onClick }) => {
  return filled ? (
    <button onClick={onClick} className={`bg-[#0DA3FF] hover:bg-[#DAF0FD] text-white px-6 py-3.5 rounded-full font-semibold text-[16px] cursor-pointer transition-colors ${className}`}>
      {children}
    </button>
  ) : (
    <button onClick={onClick} className={`text-[#0DA3FF] border border-[#0DA3FF] hover:bg-[#DAF0FD] hover:border-[#DAF0FD] px-6 py-3.5 rounded-full font-semibold text-[16px] cursor-pointer transition-colors ${className}`}>
      {children}
    </button>
  );
};

export default Button;