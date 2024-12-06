// ItemQuantitySelector.jsx
const ItemQuantitySelector = ({ cantidad, setCantidad }) => {
    const handleChange = (event) => {
      setCantidad(parseInt(event.target.value));
    };
  
    return (
      <div className="quantity-selector">
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={handleChange}
          min="1"
        />
      </div>
    );
  };
  
  export default ItemQuantitySelector;
  