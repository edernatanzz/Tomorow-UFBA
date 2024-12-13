// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <Button label="Clique aqui" onClick={() => alert('Olá!')} />
        
    </div>
  );
};

export default Home;
