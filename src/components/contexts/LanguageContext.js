import React, { createContext, useState, useContext } from "react";

// Create a Context with a default value
const LanguageContext = createContext();

// Create a custom hook for easy access to the context
export const useLanguage = () => useContext(LanguageContext);

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Function to change the language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
