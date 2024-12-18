import styled from "styled-components";
import img from "../assets/3.svg"; 
import SearchBar from "./searchbar";

const Container = styled.div`
  background: #EAF6FF;
  min-height: 19rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  width: 30rem;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1.8rem;
  }
`;


const Col2 = styled.div`
  display: flex;

  img {
    height: 20rem;

    @media (max-width: 768px) {
      height: 15rem;
      margin-top: 1.5rem;
    }
  }
`;

export default function Banner() {
  return (
    <Container>
      <Col1>
        <Title>Buy & Sell anything in your University Campus</Title>
        <SearchBar/>
      </Col1>
      <Col2>
        <img src={img} alt="University Campus Illustration" />
      </Col2>
    </Container>
  );
}
