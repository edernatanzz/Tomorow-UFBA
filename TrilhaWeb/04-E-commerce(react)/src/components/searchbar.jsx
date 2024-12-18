import styled from "styled-components";
import searchIcon from "../assets/Search More.png"; 
import filterIcon from "../assets/sliders.png";



const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 2rem;
  padding: 0.8rem 1rem;
  width: 26rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 25rem;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  flex: 1;

  ::placeholder {
    color: #aaa;
  }
`;

const Icon = styled.img`
  width: 3rem;
  margin: 0 0.5rem;
`;
const Icon2 = styled.img`
  width: 2rem;
  margin: 0 0.5rem;
`;

const SearchBar = () => {
    return (
      <SearchContainer>
        <Icon src={searchIcon} alt="Search" width={100} />
        <Input type="text" placeholder="Search for any product" />
        <Icon2 src={filterIcon} alt="Filter" />
      </SearchContainer>
    );
  };

  export default SearchBar