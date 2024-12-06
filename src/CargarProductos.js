import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase/config";

const CargarProductos = async () => {
  const productos = [
    // Tus productos iniciales
    { nombre: "Zapatilla 1", precio: 5000, categoria: "deportivas", stock: 10 },
    { nombre: "Zapatilla 2", precio: 6000, categoria: "casual", stock: 8 },
  ];

  const productosRef = collection(db, "productos");

  // Verificar si la colección ya tiene datos
  const q = query(productosRef);
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    console.log("Base de datos vacía, cargando productos...");
    productos.forEach(async (producto) => {
      await addDoc(productosRef, producto);
    });
  } else {
    console.log("Productos ya existen en la base de datos, no se agregarán duplicados.");
  }
};

export default CargarProductos;
