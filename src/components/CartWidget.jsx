import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <button>
        Carrito
        <span>{cantidadEnCarrito()}</span> {/* Muestra la cantidad total */}
      </button>
    </div>
  );
};

export default CartWidget;
