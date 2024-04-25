import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LinkTo from "./LinkTo";
import { useLanguage } from "./context/LanguageContext";
import flagEsp from "../assets/flags/argentinaFlag.png"; // Importa la imagen de la bandera de Argentina
import flagEng from "../assets/flags/usaFlag.png"; // Importa la imagen de la bandera de USA

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { getMessage, toggleLanguage, language } = useLanguage();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold primary-color ml-4">Manuel Krivoy </h1>
        <ul className="hidden md:flex">
          <li className="p-5">
            <LinkTo target="sobreMi" name={getMessage("about")}></LinkTo>
          </li>
          <li className="p-5">
            <LinkTo target="proyectos" name={getMessage("projects")}></LinkTo>
          </li>
          <li className="p-5">
            <LinkTo target="contacto" name={getMessage("contact")}></LinkTo>
          </li>
          <li className="p-5">
            {/* Renderizado condicional de la bandera */}
            {language === "es" ? (
              <img src={flagEng} alt="English Flag" onClick={toggleLanguage} className="flag" />
            ) : (
              <img src={flagEsp} alt="Spanish Flag" onClick={toggleLanguage} className="flag" />
            )}
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
                name={getMessage("about")}
                onClick={() => {
                  handleNav();
                }}
              ></LinkTo>
            </li>
            <li className="p-2">
              <LinkTo
                target="proyectos"
                name={getMessage("projects")}
                onClick={() => {
                  handleNav();
                }}
              ></LinkTo>
            </li>
            <li className="p-2">
              <LinkTo
                target="contacto"
                name={getMessage("contact")}
                onClick={() => {
                  handleNav();
                }}
              ></LinkTo>
            </li>
            <li className="p-2">
              {language === "es" ? (
                <img
                  src={flagEng}
                  alt="English Flag"
                  onClick={toggleLanguage}
                  style={{ width: "30px", height: "30px" }}
                />
              ) : (
                <img
                  src={flagEsp}
                  alt="Spanish Flag"
                  onClick={toggleLanguage}
                  style={{ width: "30px", height: "30px" }}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
