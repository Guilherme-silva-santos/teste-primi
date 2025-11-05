import type { FC } from "react";
import * as MaterialIcons from "react-icons/md";

type IconNames = keyof typeof MaterialIcons;

type InputProps = {
  onChange: (value: string) => void;
  value: string;
  iconName: IconNames;
  placeholder?: string;
};

export const Input: FC<InputProps> = ({
  onChange,
  value,
  iconName,
  placeholder,
}) => {
  const IconComponent = MaterialIcons[iconName];

  return (
    <div className="border border-gray-500 rounded-md p-2 h-8 flex items-center gap-2 text-white">
      <IconComponent className="text-gray-300" />
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="text"
        placeholder={placeholder}
        className="flex-1 border-none outline-none"
      />
    </div>
  );
};
