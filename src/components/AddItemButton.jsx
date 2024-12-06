// AddItemButton.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ producto, cantidadSeleccionada }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleClick = () => {
    agregarAlCarrito(producto, cantidadSeleccionada);
  };

  return (
    <button onClick={handleClick}>Agregar al carrito</button>
  );
};

export default AddItemButton;
