import React from "react";

const NavMenu = () => {
  return (
    <nav className="flex justify-between items-center">
      <h5 className="font-bold">MagSway</h5>
      <ul className="flex gap-11 text-mgOffWhite">
        <li className="text-white">Home</li>
        <li>Discover Elements</li>
        <li>Pricing</li>
        <li>Contact Us</li>
      </ul>
      <h5 className="bg-mgWhite rounded-full text-mgBlack px-4 py-1">
        Sign In
      </h5>
    </nav>
  );
};

export default NavMenu;
