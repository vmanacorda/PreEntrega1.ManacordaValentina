import React from 'react';
import CartWidget from './CartWidget';  

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1>Mi E-commerce</h1>
      <div style={styles.navItems}>
        <a href="#inicio" style={styles.navLink}>Inicio</a>
        <a href="#productos" style={styles.navLink}>Productos</a>
        <a href="#carrito" style={styles.navLink}>Carrito</a>
        <a href="#contacto" style={styles.navLink}>Contacto</a>
        <CartWidget /> 
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItems: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: 'white',        
    fontSize: '20px',      
    textDecoration: 'none', 
  },
};

export default Navbar;


