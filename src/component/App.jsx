
import React from 'react';
import Navbar from './Navbar';  
import ItemListContainer from './ItemListContainer'; 

import './App.css';  

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda!" />
      <section id="inicio" className="section">
        <h2>Bienvenido a nuestra tienda</h2>
        <p>Explora nuestros productos, ofertas y mucho más.</p>
      </section>

      <section id="productos" className="section">
        <h2>Productos</h2>
        <p>Aquí aparecerán los productos disponibles para compra.</p>
      </section>

      <section id="carrito" className="section">
        <h2>Tu Carrito</h2>
        <p>Consulta los productos que has agregado a tu carrito.</p>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Contáctanos si tienes alguna pregunta.</p>
      </section>
    </div>
  );
}

export default App;

