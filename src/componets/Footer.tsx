import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#111] p-20">
      <div className="flex justify-center items-center">
        <ul className="flex">
          <li className="mr-5">
            <a href="https://github.com/Luma8">
              <FaGithub size="30px" />
            </a>
          </li>
          <li className="mr-5">
            <a href="https://www.linkedin.com/in/lucas-matheus-67bba5201/">
              <FaLinkedin size="30px" />
            </a>
          </li>
          <li className="mr-5">
            <a href="https://www.instagram.com/um_lucas_aleatorio/">
              <FaInstagramSquare size="30px" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;