import { useEffect } from 'react'
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageButton from './LanguageButton.tsx'
import { previousTranslate } from '../Translation.tsx';

const languages:string[] = ['en','no','se']

type ControlsProps = {
    children: ReactNode;
  };

  const Controls: React.FC<ControlsProps> = ({children}) => {

    const url = (window.location.href).split('/')
    const lang = url[3];
    const navigate = useNavigate();
    const newUrl = (url.length > 4 ? "/" + url[4] + "/" + url[5] : "")

    const handleChangeLang = () => {
        navigate('/' + languages[(languages.indexOf(lang)+1)%languages.length] + newUrl)
    }

    useEffect(() => {
        if(!languages.includes(lang) && lang != "404" && lang != "") {
            navigate('/404')
        }
      }, []);

    const handleGoBack = () => {
        navigate('/')
    }

    return (
        <div id="container">
            <div id="controls">
                <button
                    disabled={location.pathname == ("/" + lang) && lang != "404"}
                    onClick={handleGoBack}
                >{previousTranslate[lang as keyof typeof previousTranslate]}</button>
                <LanguageButton lang={lang} handleChangeLang={handleChangeLang} />
            </div>
            <div id="main">
                {children}
            </div>
        </div>
    )
}

export default Controls
