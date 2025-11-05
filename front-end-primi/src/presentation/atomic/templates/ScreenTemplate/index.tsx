import type { FC } from "react";
import { Header } from "../../organisms/Header";

type ScreenTemplateProps = {
  children: React.ReactNode;
};

export const ScreenTemplate: FC<ScreenTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-950">
      <Header />
      <div className="lg:px-52 py-10 px-4 ">{children}</div>
    </div>
  );
};
