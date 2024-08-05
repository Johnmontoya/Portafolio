import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.scss";
import { CiMail } from "react-icons/ci";
import Sidebar from "../sidebar";

function Navbar() {
  return (
    <div id="header" className="w-full h-auto bg-zinc-800 relative">
      <div className="flex md:hidden">
        <Sidebar />
      </div>
      <header className="fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-screen-md border-none bg-black/10 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0 ml-10 lg:ml-0">
              <a aria-current="page" className="flex items-center" href="/">
                <p className="text-zinc-100">
                  <span className="font-bold">JM</span> 
                </p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-1">
              <div className="w-[106px] flex items-center justify-center rounded-lg px-2 py-1 text-md font-medium text-zinc-100 transition-all duration-200 hover:text-blue-400">
                <a className="services-btn" aria-current="page" href="#Services">
                  <span>Servicios</span>
                </a>
              </div>
              <div className="w-[108px] flex items-center justify-center rounded-lg px-2 py-1 text-md font-medium text-zinc-100 transition-all duration-200 hover:text-blue-400">
                <a className="services-btn" aria-current="page" href="#Portafolio">
                  Portafolio
                </a>
              </div>
              <div className="w-[108px] flex items-center justify-center rounded-lg px-2 py-1 text-md font-medium text-zinc-100 transition-all duration-200 hover:text-blue-400">
                <a className="services-btn" aria-current="page" href="#">
                  Contacto
                </a>
              </div>
            </div>
            <div className="flex items-center justify-end gap-1 lg:gap-3">
              <a
                className="ov-btn-slide-bottom bg-zinc-300 text-zinc-800 items-center justify-center rounded-xl border-none px-3 py-2 relative z-10 overflow-hidden inline-flex shadow-sm"
                href="/login"
              >
                <FaLinkedin />
              </a>
              <a
                className="ov-btn-slide-bottom bg-zinc-700 text-white items-center justify-center rounded-xl border-none px-3 py-2 relative z-10 overflow-hidden inline-flex shadow-sm"
                href="/login"
              >
                <FaGithub />
              </a>
              <a
                className="ov-btn-slide-bottom bg-zinc-700 text-white items-center justify-center rounded-xl border-none px-3 py-2 relative z-10 overflow-hidden inline-flex shadow-sm"
                href="/login"
              >
                <CiMail />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
