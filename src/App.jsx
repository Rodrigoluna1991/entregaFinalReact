// src/App.jsx
import React, { useEffect } from 'react';
import Contacto from "./components/contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/carrito"; // Componente de carrito
import Checkout from "./components/checkout";
import CartPage from './data/CartPage'; // Nueva página para el carrito
import CargarProductos from './CargarProductos'; // Importar la función para cargar productos

function App() {
  useEffect(() => {
    // Llamar a la función para cargar productos cuando la app se inicie
    CargarProductos();
  }, []);

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<CartPage />} /> {/* Página del carrito */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

