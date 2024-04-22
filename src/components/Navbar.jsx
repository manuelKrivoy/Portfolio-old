import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LinkTo from "./LinkTo";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold primary-color ml-4">Manuel Krivoy </h1>
        <ul className="hidden md:flex">
          <li className="p-5">
            <LinkTo target="sobreMi" name="Sobre mí"></LinkTo>
          </li>
          <li className="p-5">
            <LinkTo target="proyectos" name="Proyectos"></LinkTo>
          </li>
          <li className="p-5">
            <LinkTo target="contacto" name="Contacto"></LinkTo>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl primary-color m-4">Manuel Krivoy</h1>
          <ul className="p-5 text-2x1">
            <li className="p-2">
              <LinkTo
                target="sobreMi"
                name="Sobre mí"
                onClick={() => {
                  handleNav();
                }}
              ></LinkTo>
            </li>
            <li className="p-2">
              <LinkTo
                target="proyectos"
                name="Proyectos"
                onClick={() => {
                  handleNav();
                }}
              ></LinkTo>
            </li>
            <li className="p-2">
              <LinkTo
                target="contacto"
                name="Contacto"
                onClick={() => {
                  handleNav();
                }}
              ></LinkTo>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
