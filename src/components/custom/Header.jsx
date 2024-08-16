/* eslint-disable no-unused-vars */
import { Button } from '../ui/button';
import React from "react";

const Header = () => {
  return (
    <div className="w-full p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" />
      <div>
      <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
