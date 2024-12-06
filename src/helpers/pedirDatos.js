import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

// Obtener todas las zapatillas
export const pedirDatos = async () => {
  const querySnapshot = await getDocs(collection(db, "zapatillas"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id, // Incluye el ID del documento
    ...doc.data(), // Incluye el resto de los datos del documento
  }));
};

// Obtener una zapatilla por ID
export const pedirItemPorId = async (id) => {
  const docRef = doc(db, "zapatillas", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Zapatilla no encontrada");
  }
};
