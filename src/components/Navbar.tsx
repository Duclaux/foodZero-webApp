import { CircleX, TextAlignJustify } from "lucide-react";
import Container from "./Container";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  const links = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "Contact", to: "/contact" },
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blogs" },
  ];

  const handleDisplayNavLink = () => {
    setOpenNav((prevState) => !prevState);
  };

  return (
    <div>
      <Container style="flex items-center justify-between py-11.25 absolute left-0 right-0 top-0">
        <div className="flex items-center justify-between w-full lg:w-fit gap-11">
          <img
            src="../src/assets/images/Logo.svg"
            alt=""
            className="w-50 h-auto lg:w-full"
          />
          <TextAlignJustify
            size={30}
            color="white"
            className="cursor-pointer w-7 h-7 md:w-8 md:h-8 lg:w-13.75 lg:h-13.75"
            onClick={handleDisplayNavLink}
          />
        </div>

        <div className="hidden lg:flex text-white items-center gap-11">
          <p className="widgets-texte">+86 852 346 000</p>
          <button className="heading-5 px-11.5 py-5 border-2 border-white">
            Reservations
          </button>
        </div>
      </Container>
      {/* Navlinks section */}
        <section
          className={`${openNav ? `top-0` : `-top-full`} absolute h-screen left-0 right-0 transition-all duration-800`}
        >
          <div className="text-white relative z-1000 bg-[url('../src/assets/images/nav-header-bg.png')] bg-cover bg-center bg-no-repeat h-screen">
            <CircleX
              size={36}
              color="white"
              className="absolute top-8.5 left-9.5 cursor-pointer"
              onClick={handleDisplayNavLink}
            />

            <div className="bg-deep-forest/80 w-full h-full absolute -z-20" />
            <ul className="flex flex-col space-y-10 absolute top-30 left-30 lg:top-30 lg:left-75 list-disc list-inside">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li
                    key={link.to}
                    className={`${isActive && `text-chartreuse`} nav-item hover:text-chartreuse transition-all duration-800`}
                  >
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block align-bottom absolute bottom-56.5 right-46.5">
              <div className="w-62.5 border-b-2 border-dashed pb-3.5">
                <h1 className="heading-5">Contact</h1>
              </div>
              <p className="widgets-texte my-9.5 leading-[2.5]">
                +86 852 346 000
                <br />
                info@foodzero.com
              </p>
              <p className="widgets-texte">
                1959 Sepulveda Blvd.
                <br />
                Culver City, CA, 90230
              </p>
              <div className="flex gap-4.5 mt-9.5">
                <img src="../src/assets/images/icon_facebook.svg" alt="" />
                <img src="../src/assets/images/icon_instagram.svg" alt="" />
                <img src="../src/assets/images/icon_twitter.svg" alt="" />
                <img src="../src/assets/images/icon_youtuve.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Navbar;
