import styled from "styled-components";

function Services({ img }) {
  return (
    <ServicesContainer>
      <ServicesImg src={img} alt="cooking" />
      <ServicesDiv>
        <ServicesTitle>
          The best services ready <br /> To serve you
        </ServicesTitle>
        <ServicesText>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </ServicesText>
        <ServicesText>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </ServicesText>
        <ServicesText>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </ServicesText>
        <ServicesButton>Know More</ServicesButton>
      </ServicesDiv>
    </ServicesContainer>
  );
}


const ServicesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 992px) {
    position: relative;
  }
`;

const ServicesImg = styled.img`
  max-width: 1366px;
  max-height: 727px;

  @media (max-width: 992px) {
    position: absolute;
    left: 0;
    opacity: 0.12;
    z-index: -1;
  }
`;

const ServicesDiv = styled.div`
  max-width: 420px;
  max-height: 454px;
  margin: auto 0;
  padding: 5px;

  @media (max-width: 992px) {
    margin: auto;
  }
`;

const ServicesTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #2d3561;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    color: #1D164d;
  }

  @media (max-width: 576px) {
    font-size: 28px;
    margin: auto;
  }
`;

const ServicesText = styled.p`
  font-family: "Muli", sans-serif;
  font-size: 16px;
  color: #bcbcbc;
  padding: 18px 0;

  @media (max-width: 992px) {
    color: #2D3561;
    padding: 15px 0;
  }
`;

const ServicesButton = styled.button`
  width: 150px;
  height: 54px;
  border: none;
  background-color: #badc58;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #abca4f;
  }
`;

export default Services;
