import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const Navbar = ({ leftContent, rightContent }) => {
  return (
    <nav className="bg-primary p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        
        <Link href="/">
          {/* <Image
            src={Logo}
            className="text-white text-lg font-bold"
            width={163.057}
            height={60}
          /> */}
          {leftContent}
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {rightContent}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default Navbar;
