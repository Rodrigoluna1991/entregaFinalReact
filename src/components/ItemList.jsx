import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Asegúrate de que esta ruta sea correcta

const ItemList = ({ zapatillas }) => {
  const { agregarAlCarrito } = useContext(CartContext); // Usamos el contexto para acceder a la función

  const handleAgregarAlCarrito = (zapatilla) => {
    // Llamar a la función de agregar al carrito, con cantidad 1 (puedes cambiar este valor si lo necesitas)
    agregarAlCarrito(zapatilla, 1);
  };

  return (
    <div className="productos">
      {zapatillas.map((zapatilla) => (
        <div key={zapatilla.id} className="producto">
          <img src={zapatilla.imagen} alt={zapatilla.nombre} />
          <div>
            <h3>{zapatilla.nombre}</h3>
            <p>{zapatilla.descripcion}</p>
            <p className="precio">${zapatilla.precio}</p>
            <button onClick={() => handleAgregarAlCarrito(zapatilla)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
