// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import cart from "../assets/emojione_shopping-cart.svg";
import services from "../assets/flat-color-icons_services.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 526px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center; 
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.h2`
  font-size: 0.9rem;
  font-weight: normal;
  color: #666;
  margin: 0.5rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  background-color: red;
  width: 12rem;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  align-self: center; /* Centraliza o botão */

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    width: 10rem;
    font-size: 0.8rem;
  }
`;

const Image = styled.img`
  width: 155px;
  height: auto;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const Cart = styled.img`
  width: 155px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export default function Card() {
  return (
    <Container>
      <CardBox>
        <Column>
          <Title>Used & New</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci,
            pretium nibh eget.
          </Description>
          <Button>View More</Button>
        </Column>
        <Cart src={cart} alt="Shopping Cart" />
      </CardBox>

      <CardBox>
        <Column>
          <Title>Services</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci,
            pretium nibh eget.
          </Description>
          <Button>View More</Button>
        </Column>
        <Image src={services} alt="Services Icon" />
      </CardBox>
    </Container>
  );
}
