// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCA8XgMJeXyyebOoTEjkNi2VEqBBfl1Hjs",
  authDomain: "proyectoreact-353c6.firebaseapp.com",
  projectId: "proyectoreact-353c6",
  storageBucket: "proyectoreact-353c6.firebasestorage.app",
  messagingSenderId: "161931899896",
  appId: "1:161931899896:web:e0189610d9d4c6ccc91c0d",
  measurementId: "G-G303QHL5ZD" // Esto es opcional
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);

// Puedes exportar otras configuraciones si las necesitas más adelante
export default app;
