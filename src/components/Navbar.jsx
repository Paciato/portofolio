import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setiIsOpen] = useState(false);

  const menuOpen = () => {
    setiIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <ul className="hidden gap-10 md:flex">
        <li>
          <a href="#home" className="opacity-70 transition-all duration-300 hover:opacity-100">
            Home
          </a>
        </li>
        <li>
          <a href="#tech" className="opacity-70 transition-all duration-300 hover:opacity-100">
            Tech
          </a>
        </li>
        <li>
          <a href="#projects" className="opacity-70 transition-all duration-300 hover:opacity-100">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="opacity-70 transition-all duration-300 hover:opacity-100">
            Contact
          </a>
        </li>
      </ul>

      <ul className="hidden gap-5 md:flex">
        <li className="text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-pink-500">
          <a
            href="https://www.instagram.com/rkykrnwan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="block cursor-pointer"
          >
            <BsInstagram />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100">
          <a
            href="https://github.com/Paciato"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="block cursor-pointer"
          >
            <BsGithub />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rkykrnwan@gmail.com&su=Hello%20Rizky&body=Hi%20Rizky,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Gmail to send email"
            className="block cursor-pointer"
          >
            <SiGmail/>
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4x-1" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4x-1" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" className="opacity-70 transition-all duration-300 hover:opacity-100">
                Home
              </a>
            </li>
            <li>
              <a href="#tech" className="opacity-70 transition-all duration-300 hover:opacity-100">
                Tech
              </a>
            </li>
            <li>
              <a href="#projects" className="opacity-70 transition-all duration-300 hover:opacity-100">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="opacity-70 transition-all duration-300 hover:opacity-100">
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
              <BsInstagram />
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsFacebook />
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar
