import React from "react";

const Navbar = () => {
    return (
        <nav className="flex flex-col flex-nowrap justify-center space-x-2 py-2 bg-blue-950 h-12">
          <section className="flex flex-row justify-center space-x-14">
            <button className="btn-nav">Sobre Nosotros</button>
            <button className="btn-nav">Bachillerato</button>
            <button className="btn-nav">Licenciaturas</button>
            <button className="btn-nav">Posgrados</button>
            <button className="btn-nav">Cursos</button>
            <button className="btn-nav">Eventos</button>
            <button className="btn-nav">Actividades</button>
          </section>
        </nav>
    )
}

export default Navbar;