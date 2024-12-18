import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2a9d8f;
`;

const CartButton = styled.button`
  background-color: #ff7f50;
  color: white;
  font-size: 14px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    return <LoadingMessage> vazio </LoadingMessage>;
  }

  return (
    <Container>
      <Title>Lista de Produtos</Title>
      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <Description>{product.description}</Description>
            <CardFooter>
              <Price>R$ {product.price.toFixed(2)}</Price>
              <CartButton onClick={() => alert("Produto Adicionado ao Carrinho")}>
                🛒 Adicionar ao Carrinho
              </CartButton>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};


export default ProductList;
