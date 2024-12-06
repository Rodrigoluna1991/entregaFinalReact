import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useCart } from "../context/CartContext"; // Asegúrate de que esto es correcto

const ItemListContainer = () => {
  const [zapatillas, setZapatillas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Usamos el hook useCart para obtener la función agregarAlCarrito
  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    const db = getFirestore();
    const zapatillasCollection = collection(db, "zapatillas");

    const obtenerZapatillas = async () => {
      try {
        const snapshot = await getDocs(zapatillasCollection);
        const zapatillasList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setZapatillas(zapatillasList);
      } catch (error) {
        console.error("Error al obtener zapatillas: ", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerZapatillas();
  }, []);

  // Manejo de la acción de agregar al carrito
  const handleAddToCart = (zapatilla) => {
    agregarAlCarrito(zapatilla, 1); // Agregamos 1 unidad al carrito
  };

  return (
    <div>
      {loading ? (
        <p>Cargando zapatillas...</p>
      ) : zapatillas.length === 0 ? (
        <p>No se encontraron zapatillas.</p>
      ) : (
        zapatillas.map((zapatilla) => (
          <div key={zapatilla.id} className="producto">
            <img src={zapatilla.imagen} alt={zapatilla.nombre} />
            <div>
              <h4>{zapatilla.nombre}</h4>
              <p>{zapatilla.descripcion}</p>
              <p>Precio: ${zapatilla.precio}</p>
              <p>Stock: {zapatilla.stock}</p>
              <button onClick={() => handleAddToCart(zapatilla)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
