// Checkout.jsx
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Brief from './Brief';

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    direccion: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Compra realizada');
    vaciarCarrito();
  };

  return (
    <div className="checkout">
      <h2>Formulario de Compra</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={datosUsuario.nombre}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            name="direccion"
            value={datosUsuario.direccion}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Finalizar compra</button>
      </form>

      {/* Resumen de la compra */}
      <Brief carrito={carrito} precioTotal={precioTotal} /> {/* Mostrar como un valor directo */}
    </div>
  );
};

export default Checkout;

