import proj1 from "../assets/projects/proj1.png";
import proj2 from "../assets/projects/proj2.png";
import proj3 from "../assets/projects/proj3.png";
import proj4 from "../assets/projects/proj4.png";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { useLanguage } from "./context/LanguageContext";

const Work = () => {
  const { getMessage } = useLanguage();
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="proyectos">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">{getMessage("projects")}</p>
        <p className="text-gray-400 ">{getMessage("projectsDesc")}</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj1} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">{getMessage("p1")}</span>
            <div className="pt-8 text-center">
              <a href="https://react-ecommerce-sooty.vercel.app/" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <MdLiveTv size={24} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj2} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">{getMessage("p2")}</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/manuelKrivoy/facturacion-crud-springboot" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <FaGithub size={24} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj3} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">{getMessage("p3")}</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/manuelKrivoy/TpTurneraMedica" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <FaGithub size={24} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj4} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">{getMessage("p4")}</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/manuelKrivoy/Tasks-page" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <FaGithub size={24} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
