import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os produtos da Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Produtos</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h2 style={styles.productTitle}>{product.title}</h2>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilização básica inline
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
  },
  productTitle: {
    fontSize: '18px',
    margin: '10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
};

export default ProductList;
