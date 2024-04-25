import heroimage from "../assets/hero.png";
import cv from "../assets/cv.pdf";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "../heroStyles.css"; // Importa el archivo CSS externo
import { useLanguage } from "./context/LanguageContext";

const Hero = () => {
  const { getMessage } = useLanguage();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70xh] mx-auto py-8 bg-black">
      <div className="w-[300px] h-auto lg:2-[400px]">
        <img src={heroimage} alt="presentacion" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold custom-heading">
          <span className="primary-color pb-5">{getMessage("iam")}</span> <br />
          <TypeAnimation
            sequence={[
              getMessage("computerTechnician"),
              1000,
              getMessage("webDeveloper"),
              1000,
              getMessage("itStudent"),
              1000,
            ]}
            wrapper="span"
            speed={15}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg-:text-xl">{getMessage("heroDesc")}</p>

        <div className="my-8 flex items-center">
          <a
            href={cv}
            download="Manuel Krivoy.pdf"
            className="flex items-center px-6 py-3 rounded-xl border border-gray-400 text-white mr-4 relative transform transition-transform duration-300 custom-button"
            style={{
              backgroundImage: "linear-gradient(to bottom right, #022f40, #38aecc)",
            }}
          >
            <FaDownload size={20} className="mr-2" />
            {getMessage("cvButton")}
            <div className="absolute top-0 left-0 w-full h-full bg-primary-color opacity-0 transition-opacity duration-300"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/manuel-krivoy/"
            className="mr-4 text-white hover: transition-transform duration-300 hover:scale-110"
            target="_blank"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/manuelKrivoy"
            className="text-white hover: transition-transform duration-300 hover:scale-110"
            target="_blank"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
