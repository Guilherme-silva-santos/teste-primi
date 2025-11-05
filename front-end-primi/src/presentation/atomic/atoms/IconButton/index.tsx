import type { FC } from "react";
import * as MaterialIcons from "react-icons/md";

type IconNames = keyof typeof MaterialIcons;

type IconButtonProps = {
  iconName: IconNames;
  text: string;
  iconColor?: string;
  iconSize?: number;
  onClick?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  iconColor,
  iconSize,
  onClick,
  text,
}) => {
  const IconComponent = MaterialIcons[iconName];

  return (
    <button onClick={onClick}>
      <IconComponent color={iconColor} size={iconSize} />
      <p>{text}</p>
    </button>
  );
};
