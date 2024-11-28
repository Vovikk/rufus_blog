import Image from "next/image";
import Link from "next/link";
import logoMobile from "@/assets/icons/logo_mobile.svg";
import logo from "@/assets/icons/logo.svg";
import search from "@/assets/icons/search.svg";
import Menu from "@/components/Header/Menu";
import Button from "@/components/Button/Button";
import { NAV_LINKS } from "@/data/index";

const Navbar = () => {
  return (
    <header className=" w-full sticky top-0 z-50 bg-background">
      <div className="w-full max-w-[1440px] m-auto">
        <div className="relative flex items-center justify-center h-20 lg:hidden">
          <Link href="/">
            <Image src={logoMobile} alt="Logo" className="cursor-pointer" />
          </Link>
          <Menu links={NAV_LINKS} />
        </div>
        <div className="hidden  w-full items-center justify-between lg:flex h-20 px-20">
          <div className="flex items-center justify-center gap-12 text-lg ">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
            <nav>
              <ul className="flex gap-6">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <a href={link.href + link.key}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center justify-center gap-8 text-base">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-64 h-14 rounded-[3.75rem] px-8 placeholder:text-black"
                placeholder="Search"
              />
              <div htmlFor="input" className="absolute right-8 cursor-pointer">
                <Image src={search} alt="Search" />
              </div>
            </div>
            <Button label="¡Hablemos!" className="px-8 py-4"></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
