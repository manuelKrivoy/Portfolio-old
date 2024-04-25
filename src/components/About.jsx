import Carrousel from "./Carrousel";
import { useLanguage } from "./context/LanguageContext";

const About = () => {
  const { getMessage } = useLanguage();
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="sobreMi">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt:0 text-left flex flex-col ">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">{getMessage("about")}</h2>
            <p className="text-base lg:text-lg ">{getMessage("aboutMeDesc")}</p>
            <br></br>
          </div>
        </div>
        <Carrousel />
      </div>
    </div>
  );
};

export default About;
