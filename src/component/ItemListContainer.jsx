import React from 'react';

const ItemListContainer = ({ welcomeMessage }) => {
  return (
    <div style={styles.container}>
      <h2>{welcomeMessage}</h2>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    margin: '20px 0',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    textAlign: 'center',
  }
};

export default ItemListContainer;
