import { createContext, useState, useContext } from "react";
import messagesEs from "../../lang/messages_es.json";
import messagesEn from "../../lang/messages_en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const messages = language === "es" ? messagesEs : messagesEn;

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  const getMessage = (id) => {
    return messages[id] || id;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getMessage }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
