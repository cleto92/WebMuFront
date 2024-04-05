import { NavbarContent } from "@nextui-org/react";

import DropDown from "./DropDown";

const LoginOn = () => {
  return (
    <div className="container">
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <DropDown />
      </NavbarContent>
    </div>
  );
};

export default LoginOn;
