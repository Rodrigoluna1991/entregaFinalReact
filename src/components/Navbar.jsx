import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Calzados Rodri</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li> {/* Agregamos la opción Contacto */}
        <li><Link to="/carrito">Carrito</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
