import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="sobreMi">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt:0 text-left flex flex-col ">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">Sobre mí</h2>
            <p className="text-base lg:text-lg">
              Ser entusiasta por la tecnología desde pequeño me llevó a siempre estar aprendiendo herramientas nuevas.
              Empecé a programar en el secundario, del cual egresé como Técnico En Informática. Actualmente estoy
              cursando tercer año en una Licenciatura en IT y en mis tiempos libres aprendiendo ya sea de forma
              autodidacta o a través de cursos las últimas innovaciones tecnológicas.
            </p>
          </div>
        </div>
        <img
          src={aboutImg}
          width={500}
          height={500}
          className="mx-auto py-8 md:py-0 md:rounded-3xl filtro-gris hover:filter-none "
        />
      </div>
    </div>
  );
};

export default About;
