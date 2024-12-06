import React from 'react';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar, stock }) => {
    return (
        <div>
            <div className="item-count">
                {/* Deshabilitamos el botón de restar cuando la cantidad es 1 */}
                <button onClick={handleRestar} disabled={cantidad <= 1}>-</button>
                <p>{cantidad}</p>
                {/* Deshabilitamos el botón de sumar cuando la cantidad es igual al stock */}
                <button onClick={handleSumar} disabled={cantidad >= stock}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
