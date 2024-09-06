import { useLanguage } from "./context/LanguageContext";

const Contact = () => {
  //Uso contexto
  const { getMessage } = useLanguage();
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contacto">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color ">{getMessage("writeme")}</h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form
              action="
              https://getform.io/f/bkkgzexb"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="mt-2.5 relative">
                  <input
                    type="text"
                    name="name"
                    id=""
                    required
                    placeholder={getMessage("name")}
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="mt-2.5 relative">
                  <input
                    type="email"
                    name="email"
                    id=""
                    required
                    placeholder={getMessage("email")}
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <textarea
                      name="message"
                      required
                      id=""
                      placeholder={getMessage("message")}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md hover: transition-transform duration-300 hover:scale-105"
                  >
                    {getMessage("submit")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
