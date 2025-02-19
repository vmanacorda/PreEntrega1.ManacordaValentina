import React from 'react';

const CartWidget = () => {
  const cartCount = 5;  

  return (
    <div style={styles.cartWidget}>
      <i className="bi bi-cart-fill" style={styles.icon}></i>
      {cartCount > 0 && (
        <span style={styles.notification}>{cartCount}</span>
      )}
    </div>
  );
};

const styles = {
  cartWidget: {
    position: 'relative',
    display: 'inline-block',
    marginRight: '25px',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px',
    color: 'white',
  },
  notification: {
    position: 'absolute',
    top: '2px',
    right: '1px',
    color: 'black',  
    fontSize: '15px',
    fontWeight: 'bold',
   padding: '0 5px', 
  }
};

export default CartWidget;

