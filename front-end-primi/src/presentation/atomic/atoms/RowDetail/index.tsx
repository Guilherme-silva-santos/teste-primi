import type { FC } from "react";

type RowDetailProps = {
  title: string;
  description: string | number;
};

export const RowDetail: FC<RowDetailProps> = ({ title, description }) => {
  return (
    <div className="flex flex-row gap-1 items-baseline">
      <p className="text-xl font-semibold text-gray-300">{title}</p>
      <p className="text-gray-500">{description}</p>
      <p></p>
    </div>
  );
};
