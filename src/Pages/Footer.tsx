import { FaGithub, FaLinkedin, FaInstagramSquare, FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="relative bg-dark-100 pt-16 pb-8 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center mb-8">
          <ul className="flex gap-6">
            <li>
              <a href="https://github.com/Luma8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl glass social-link hover:border-primary/30 transition-all duration-300">
                <FaGithub size="22px" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lucas-matheus-67bba5201/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl glass social-link hover:border-primary/30 transition-all duration-300">
                <FaLinkedin size="22px" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/um_lucas_aleatorio/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl glass social-link hover:border-primary/30 transition-all duration-300">
                <FaInstagramSquare size="22px" />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center text-white/30 text-sm flex items-center justify-center gap-1">
          Made with <FaHeart className="text-primary text-xs" /> by Lucas Matheus
        </p>
      </div>
    </footer>
  )
}

export default Footer;