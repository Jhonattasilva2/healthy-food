import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Home({ img }) {
  return (
    <HomeContainer>
      <HomeDiv>
        <HomeTitle>Ready for Trying a new recipe?</HomeTitle>
        <HomeForm>
          <HomeFormInput placeholder="Search healthy recipes" />
          <HomeFormButton type="submit">
            <FaSearch />
          </HomeFormButton>
        </HomeForm>
      </HomeDiv>

      <ContainerImg src={img} alt="balança" />
    </HomeContainer>
  );

}

const HomeContainer = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1366px;
    display: flex;
    margin-bottom: 2%;
  `;

  const HomeDiv = styled.div`
    margin: 38vh 137px;
    width: 482px;
    height: 284px;
    z-index: 1;

    @media (max-width: 992px) {
      margin: auto;
    }

    @media (max-width: 576px) {
      width: 70%;
    }
  `;

  const HomeTitle = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #1d164d;
    font-size: 48px;
    line-height: 1.6;
    max-width: 347px;

    @media (max-width: 576px) {
      font-size: 36px;
    }
  `;

  const HomeForm = styled.form`
    display: flex;
    max-width: 411px;
    max-height: 52px;
    margin-top: 20px;
    
  `;

  const HomeFormInput = styled.input`
    width: 343px;
    height: 52px;
    border-radius: 5px;
    border: 1px solid #2d3561;

    &::placeholder {
      color: #b4b4b4;
      padding: 15px;
      font-size: 0.9rem;
    }

    @media (max-width: 576px) {
      width: 80%;
    }
  `;

  const HomeFormButton = styled.button`
    width: 52px;
    height: 52px;
    margin-left: 16px;
    background-color: #badc58;
    color: #fff;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #abca4f;
    }
  `;
 

  const ContainerImg = styled.img`
    position: absolute;
    right: 1px;
    height: 100%;

    @media (max-width: 992px) {
      opacity: 0.15;
    }
  `;


export default Home;
