import type { FC } from "react";
import * as MaterialIcons from "react-icons/md";

type IconNames = keyof typeof MaterialIcons;

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  iconName: IconNames;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

export const Select: FC<SelectProps> = ({
  iconName,
  placeholder,
  options,
  value,
  onChange,
  error,
}) => {
  const IconComponent = MaterialIcons[iconName];

  return (
    <div className="flex flex-col gap-1">
      <div className="border border-gray-500 rounded-md p-2 h-10 flex items-center gap-2 text-white bg-transparent">
        <IconComponent className="text-gray-300" />
        <select
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-white border-none outline-none"
        >
          <option value="">{placeholder || "Selecione uma opção"}</option>
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-gray-900 text-white"
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
};
