// src/components/ItemDetail.jsx
import { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="item-detail">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>

      {/* Selector de cantidad */}
      <ItemQuantitySelector cantidad={cantidad} setCantidad={setCantidad} />

      {/* Botón para agregar al carrito */}
      <AddItemButton producto={producto} cantidadSeleccionada={cantidad} />
    </div>
  );
};

export default ItemDetail;
