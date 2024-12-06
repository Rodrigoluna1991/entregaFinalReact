// Brief.jsx
const Brief = ({ carrito, precioTotal }) => {
    return (
      <div className="brief">
        <h3>Resumen de la Compra</h3>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} x {producto.cantidad} - ${producto.precio * producto.cantidad}
            </li>
          ))}
        </ul>
        <p>Total: ${precioTotal}</p>  {/* Mostrar precioTotal como un valor */}
      </div>
    );
  };
  
  export default Brief;
  