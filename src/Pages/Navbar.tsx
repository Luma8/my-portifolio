import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaRocket, FaInstagramSquare } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {

  const { i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<string>('en');

  const onClickLanguageChange = (e: string) => {
    const language = e;
    i18n.changeLanguage(language);
  }

  const changeLanguage = (lng: string) => {
    setLang(lng);
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`px-6 py-4 flex justify-between items-center navbar animate-slide-down ${
      scrolled 
        ? 'glass shadow-lg shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
          <FaRocket size={'22px'} className="text-primary" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="toggle-container">
          <button onClick={() => {
            changeLanguage('en')
            onClickLanguageChange('en')
          }}>
            <span
              className={
                lang === 'en'
                  ? 'fi fi-us border-flag-active'
                  : 'fi fi-us border-flag'
              }>
            </span>
          </button>
          <button onClick={() => {
            changeLanguage('pt')
            onClickLanguageChange('pt')
          }}>
            <span
              className={
                lang === 'pt'
                  ? "fi fi-br border-flag-active"
                  : "fi fi-br border-flag"}
            >
            </span>
          </button>
        </div>
        <div className="h-5 w-px bg-white/10"></div>
        <ul className="flex items-center gap-3">
          <li>
            <a href="https://github.com/Luma8" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size="18px" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lucas-matheus-67bba5201/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size="18px" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/um_lucas_aleatorio/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagramSquare size="18px" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )

}
export default Navbar;