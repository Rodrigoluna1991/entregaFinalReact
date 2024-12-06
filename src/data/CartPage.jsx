// CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const {
    carrito,
    cantidadEnCarrito,
    precioTotal,
    vaciarCarrito,
    agregarAlCarrito,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRestarCantidad = (item) => {
    if (item.cantidad > 1) {
      agregarAlCarrito(item, -1); // Restar 1 unidad del carrito
    }
  };

  const handleSumarCantidad = (item) => {
    agregarAlCarrito(item, 1); // Sumar 1 unidad al carrito
  };

  const handleFinalizarCompra = () => {
    navigate('/checkout'); // Navegar a la página de Checkout
  };

  return (
    <div className="cart-page">
      <h2>Carrito</h2>
      <p>Cantidad total: {cantidadEnCarrito()}</p>
      <p>Precio total: ${precioTotal}</p>

      {carrito.length > 0 ? (
        <div>
          <ul className="cart-list">
            {carrito.map((producto) => (
              <li key={producto.id} className="cart-item">
                <img src={producto.imagen} alt={producto.nombre} width="50" />
                <div>
                  <h4>{producto.nombre}</h4>
                  <p>
                    {producto.cantidad} x ${producto.precio} = $
                    {producto.cantidad * producto.precio}
                  </p>
                  <div>
                    <button onClick={() => handleRestarCantidad(producto)}>-</button>
                    <button onClick={() => handleSumarCantidad(producto)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-actions">
            <button onClick={vaciarCarrito} className="btn vaciar">
              Vaciar Carrito
            </button>
            <button onClick={handleFinalizarCompra} className="btn finalizar">
              Finalizar Compra
            </button>
          </div>
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default CartPage;
