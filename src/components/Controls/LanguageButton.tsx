import React from 'react';
import { languageTranslate } from '../Translation.tsx';

interface LanguageButtonProps {
  lang: string;
  handleChangeLang: any
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ lang, handleChangeLang }) => {
  
    const showButton = (lang == "404" ? false : true)
  
    return (
    <>

      {showButton ? (
        <div id="language">
            <button id="langButton" onClick={handleChangeLang}><img src={"/public/" + lang + ".png"} alt={ lang } /></button>
            <p>{languageTranslate[lang as keyof typeof languageTranslate]}: {lang}</p>
        </div>
      ) : null}
    </>
  );
};

export default LanguageButton;