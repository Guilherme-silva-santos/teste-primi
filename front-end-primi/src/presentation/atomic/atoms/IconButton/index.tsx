import type { FC } from "react";
import * as MaterialIcons from "react-icons/md";

type IconNames = keyof typeof MaterialIcons;

type IconButtonProps = {
  iconName: IconNames;
  text: string;
  iconSize?: number;
  onClick?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  iconSize,
  onClick,
  text,
}) => {
  const IconComponent = MaterialIcons[iconName];

  return (
    <button
      onClick={onClick}
      className="flex flex-row items-center gap-1 hover:cursor-pointer hover:opacity-70 duration-300"
    >
      <IconComponent size={iconSize} className="text-gray-300" />
      <p className="text-sm text-gray-300 font-semibold">{text}</p>
    </button>
  );
};
