import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import spring from "../assets/skills/spring.png";
import git from "../assets/skills/git.png";
import sql from "../assets/skills/mysql.svg";
const Skills = () => {
  return (
    <div className="border border-gray-600 text-gray-300 grid grid-cols-4 sm:grid-cols-4 md:h-[150px] max-w-[1200px] mx-auto place-items-center md:flex md:justify-between md:items-center">
      <h2 className="secundary-color text-xl md:text-4xl font-bold m-4">
        Tech <br /> Skills
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={html} />

        <p className="mt-2 secundary-color">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={css} />
        <p className="mt-2 secundary-color">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={js} />
        <p className="mt-2 secundary-color">JavaScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={react} />
        <p className="mt-2 secundary-color">React</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={spring} />
        <p className="mt-2 secundary-color">Spring Boot</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={git} />
        <p className="mt-2 secundary-color">GIT</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] hover:scale-105 cursor-pointer">
        <img src={sql} />
        <p className="mt-2 secundary-color">MySQL</p>
      </div>
    </div>
  );
};

export default Skills;
