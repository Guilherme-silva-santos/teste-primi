import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  variant: "cancel" | "save";
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: FC<ButtonProps> = ({ variant, onClick, type }) => {
  const navigate = useNavigate();

  const baseStyles = "transition px-6 py-2 rounded-md font-medium";

  const styles = {
    cancel: "text-gray-400 hover:text-gray-200",
    save: "bg-purple-600 hover:bg-purple-700 text-white",
  };

  const handleClick = () => {
    if (variant === "cancel") {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onClick ? onClick() : navigate(-1);
    }
  };

  return (
    <button
      type={variant === "save" ? type || "submit" : "button"}
      onClick={handleClick}
      className={`${baseStyles} ${styles[variant]}`}
    >
      {variant === "cancel" ? "Cancelar" : "Salvar"}
    </button>
  );
};
