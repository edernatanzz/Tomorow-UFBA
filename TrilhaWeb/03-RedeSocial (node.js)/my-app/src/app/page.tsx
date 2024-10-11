'use client'
import Login from "./components/login/login";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  margin-bottom: 20px; 
  font-size: 2rem; 
  color: #333; 
`;

export default function Home() {
  return (
    <Container>
      <Title>Bem-vindo</Title>
      <Login />
    </Container>
  );
}
