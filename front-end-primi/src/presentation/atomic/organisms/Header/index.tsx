import logo from "../../../../assets/logo.png";

export const Header = () => {
  return (
    <header className="bg-gray-950 justify-center w-full items-center flex h-14 border-b-2 border-b-gray-700">
      <img src={logo} alt="Logo" className="h-40 w-40 object-contain " />
    </header>
  );
};
