import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import logo from "../../public/assets/images/logo.png";

const ToggleIcon = () => {
  return (
    <div className="mr-4 flex items-center p-2 border rounded-full space-x-3 ">
      <Menu size={24} className="text-black " />
      <div className="w-6 h-6 flex items-center justify-center border rounded-full">
        <Image
          src={logo}
          alt="Logo"
          width={20}
          height={20}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default ToggleIcon;
