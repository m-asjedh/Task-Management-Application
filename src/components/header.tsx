import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 px-4 py-2 w-full flex justify-between border-b">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-[50px]">
          <Image src={logo} width={30} height={30} alt="Logo" />
          <div className="font-bold">Code94Labs</div>
        </div>

        <div className="h-16 border-l "></div>

        <div className="relative ml-14 flex items-center">
          <Search color="gray" size={16} className="absolute left-3" />
          <input
            type="text"
            placeholder="Search Tasks"
            className="w-80 p-2 pl-10 border rounded-lg  focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
