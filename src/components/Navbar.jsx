import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex flex-col flex-nowrap justify-center space-x-2 bg-blue-950 ${
        isMenuOpen ? "" : "h-12"
      }`}
    >
      <div className="flex justify-between items-center md:hidden w-full absulote">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <section className="flex flex-row justify-center space-x-8 hidden md:flex w-full ">
        <button className="btn-nav">Sobre Nosotros</button>
        <button className="btn-nav">Bachillerato</button>
        <button className="btn-nav">Licenciaturas</button>
        <button className="btn-nav">Posgrados</button>
        <button className="btn-nav">Cursos</button>
        <button className="btn-nav">Eventos</button>
        <button className="btn-nav">Actividades</button>
      </section>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden w-full md:hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <section className="flex flex-col justify-start space-y-4 p-2">
          <button className="btn-nav">Sobre Nosotros</button>
          <button className="btn-nav">Bachillerato</button>
          <button className="btn-nav">Licenciaturas</button>
          <button className="btn-nav">Posgrados</button>
          <button className="btn-nav">Cursos</button>
          <button className="btn-nav">Eventos</button>
          <button className="btn-nav">Actividades</button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
