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
    // i18n.changeLanguage(lng);
    setLang(lng);
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
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

  const navbarClass = scrolled ? 'bg-[#111]' : '';
  const toggleCollor = scrolled ? 'bg-[#555]' : '';

  return (
    <nav className={`p-4 flex justify-between navbar ${navbarClass}`}>
      <div className="flex">
        <FaRocket size={'30px'} color={'#8DA9C4'} />
      </div>
      <div className="flex items-center">
        <div className={`ml-5 toggle-container ${toggleCollor}`}>
          <button className="" onClick={() => {
            changeLanguage('en')
            onClickLanguageChange('en')
          }}>
            <span
              className={
                lang === 'en'
                  ?
                  'fi fi-us border-flag-active'
                  :
                  'fi fi-us border-flag'
              }>
            </span>
          </button>
          <button className="" onClick={() => {
            changeLanguage('pt')
            onClickLanguageChange('pt')
          }}>
            <span
              className={
                lang === 'pt'
                  ?
                  "fi fi-br border-flag-active"
                  :
                  "fi fi-br border-flag"}
            >
            </span>
          </button>
        </div>
        <ul className="flex items-center">
          {/* <li className="mx-2 font-bold text-[#8DA9C4]">Home</li>
          <li className="mx-2">Portfilo</li>
          <li className="mx-2">Contact</li> */}
          <li className="mx-1" >
            <a href="https://github.com/Luma8">
              <FaGithub />
            </a>
          </li>
          <li className="mx-1" >
            <a href="https://www.linkedin.com/in/lucas-matheus-67bba5201/">
              <FaLinkedin />
            </a>
          </li>
          <li className="mx-1">
            <a href="https://www.instagram.com/um_lucas_aleatorio/">
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )

}
export default Navbar;