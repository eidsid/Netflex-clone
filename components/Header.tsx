import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from "next/link";
function Header() {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <header className={scroll ? "stacky" : ""}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain "
        />
        <ul className="hidden space-x-4 md:flex ">
          <li className="headerLink">Home </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink"> My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline w-6 h-6 " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
