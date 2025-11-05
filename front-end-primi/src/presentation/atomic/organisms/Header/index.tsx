import type { FC } from "react";
import logo from "../../../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { IconButton } from "../../atoms/IconButton";

export const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full items-center flex h-14 border-b-2 border-b-gray-700 justify-between px-12">
      <img
        src={logo}
        alt="Logo"
        width={100}
        height={20}
        className="object-contain"
      />
      <IconButton
        iconName="MdMovieFilter"
        text="Filmes"
        iconSize={30}
        onClick={() => {
          navigate("/");
        }}
      />
      <IconButton
        iconName="MdAddCircle"
        text="Adicionar"
        iconSize={30}
        onClick={() => {
          navigate("/add-movie");
        }}
      />
    </header>
  );
};
