import arrowRight from "@/assets/icons/arrowRight.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import Image from "next/image";

const Button = ({ variant = "base", label, onClick, className = "" }) => {
  const baseClass =
    "px-6 py-4 bg-purple text-white font-bold rounded-[1.75rem] w-fit flex items-center justify-center";

  const variantClasses = {
    base: "",
    filter: "px-4 py-2 flex items-center justify-center",
    white:
      "xl:px-6 xl:py-3 bg-white text-black flex items-center justify-center",
    pagination:
      "flex items-center justify-center px-4 py-2 font-normal bg-transparent text-black border border-black rounded-full max-w-10 max-h-10",
    paginationLeft:
      "flex items-center justify-center px-4 py-2 font-normal bg-transparent text-black border border-black rounded-full max-w-10 max-h-10 max-w-none max-h-none",
    paginationRight:
      "flex items-center justify-center px-4 py-2 font-normal bg-transparent text-black border border-black rounded-full max-w-10 max-h-10 justify-between max-w-none max-h-none",
    paginationSelected:
      "flex items-center justify-center px-4 py-2 font-normal border border-black rounded-full max-w-10 max-h-10 bg-black text-white",
  };

  return (
    <button
      className={`${variantClasses[variant]} ${baseClass}`}
      onClick={onClick}
    >
      {variant === "paginationLeft" && (
        <Image src={arrowLeft} alt={label || "button image"} className="mr-2" />
      )}
      {label && <span className="flex-shrink-0">{label}</span>}
      {variant === "paginationRight" && (
        <Image
          src={arrowRight}
          alt={label || "button image"}
          className="ml-2"
        />
      )}
    </button>
  );
};

export default Button;
