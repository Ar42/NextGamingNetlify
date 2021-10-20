import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="Guides">
                <a>Guides</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
