import React from "react";
import Select from "react-select";
import { languageOptions } from "@/contants/languageOptions";
import { LanguageOptionProps } from "@/interfaces/CommonInterfaces";
  
const LanguagesDropdown: React.FC<{ onSelectLanguage: (selectedOption: LanguageOptionProps) => void }> = ({ onSelectLanguage }) => {  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      defaultValue={languageOptions[0]}
      onChange={ (selectedLanguage) => onSelectLanguage(selectedLanguage as LanguageOptionProps) }
    />
  );
};

export default LanguagesDropdown;