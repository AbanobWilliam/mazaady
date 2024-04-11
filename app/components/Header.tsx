"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Logo from "./Logo";
import Close from "./icons/Close";
import Bars from "./icons/Bars";
import SearchIcon from "./icons/SearchIcon";
import NotificationIcon from "./icons/NotificationIcon";
import LanguageIcon from "./icons/LanguageIcon";
import MobileLogo from "./MobileLogo";
const menu = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Blog", href: "/blog" },
  { id: 3, title: "Gift", href: "/gift" },
  { id: 4, title: "Search", href: "/search" },
];

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const path = usePathname();
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <nav className="bg-white px-4 lg:px-0 py-2.5 lg:py-0 lg:pt-3">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex gap-x-2 lg:gap-x-8 items-end">
          <button
            onClick={handleMenuToggle}
            className="lg:hidden"
            data-testid="toggle-menu"
          >
            {menuToggle ? <Close /> : <Bars />}
          </button>
          <Link href="/" className="lg:hidden">
            <MobileLogo />
          </Link>
          <Link href="/" className="hidden lg:block mb-3">
            <Logo />
          </Link>
          {menuToggle && (
            <ul
              data-testid="toggled-menu"
              className={`${
                menuToggle
                  ? "absolute top-12 rounded-lg bg-white w-full left-0"
                  : "hidden lg:flex lg:items-start"
              }  lg:static lg:flex lg:rounded-none lg:bg-transparent`}
            >
              {menu.map((item, index) => (
                <li
                  className={`px-2 py-1 lg:p-0 ${
                    index !== menu.length - 1 ? "lg:mr-10" : ""
                  }`}
                  key={item.id}
                >
                  <Link
                    href={item.href}
                    className={`${
                      path == item.href
                        ? "text-primary font-bold after:hidden after:w-full after:h-1.5 after:bg-primary lg:after:block after:rounded-tr-lg after:rounded-tl-lg after:mt-4"
                        : "text-[#828282] after:hidden after:w-0 after:hover:w-full after:hover:h-1.5 after:hover:bg-primary lg:after:block after:rounded-tr-lg after:rounded-tl-lg after:mt-4"
                    } text-lg after:transition-all after:ease-in-out after:duration-300`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="px-2 py-1 lg:hidden">
                <Button classes="py-2.5 px-4" showIcon={true}>
                  Add new product
                </Button>
              </li>
            </ul>
          )}
        </div>
        <ul className="flex items-center lg:pb-3">
          <li className="pr-4 lg:px-6 py-0 lg:py-2 lg:border-r lg:border-[#FFEAD2]">
            <SearchIcon />
          </li>
          <li className="px-4 lg:px-6 py-0 lg:py-2 lg:border-r lg:border-[#FFEAD2]">
            <NotificationIcon />
          </li>
          <li className="px-6 hidden lg:block">
            <Image src={"/avatar.png"} alt="Avatar" width={40} height={40} />
          </li>
          <li className="px-6 lg:hidden">
            <Image src={"/avatar.png"} alt="Avatar" width={24} height={24} />
          </li>
          <li className="pr-8 hidden lg:block">
            <Button classes="py-2.5 px-4" showIcon={true}>
              Add new product
            </Button>
          </li>
          <li className="pr-2 border-r border-[#E0E0E0] hidden lg:block">
            <LanguageIcon />
          </li>
          <li className="pl-2 text-gray1 hidden lg:block font-bold text-lg">
            EN
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
