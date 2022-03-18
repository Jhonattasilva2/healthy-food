import styled from "styled-components";

function Join({ img }) {
  return (
    <JoinContainer id="join">
      <JoinDiv>
        <JoinTitle>Join our membership to get special offer</JoinTitle>
        <JoinForm>
          <JoinInput placeholder="Enter your email adress" />
          <JoinButton>Join</JoinButton>
        </JoinForm>
      </JoinDiv>
      <JoinImg src={img} alt="friendship" />
    </JoinContainer>
  );
}

const JoinContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 992px) {
    position: relative;
  }
`;

const JoinDiv = styled.div`
  width: 454px;
  height: 168px;
  margin-left: 15%;

  @media (max-width: 576px) {
    margin: auto 10%;
    padding: 10px;
  }

  
`;

const JoinTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: bold;
  max-width: 377px;
  color: #2d3561;
  margin-bottom: 5%;

  @media (max-width: 576px) {
    font-size: 25px;
    max-width: 350px;
  }

`;

const JoinForm = styled.form`
  width: 100%;
  max-width: 453px;
  min-width: 453px;

  @media (max-width: 576px) {
    max-width: 400px;
  }
  @media (max-width: 439px) {
    display: flex;
    flex-direction: column;
  }
`;

const JoinInput = styled.input`
  width: 344px;
  max-width: 100%;
  height: 52px;
  max-height: 100%;
  border-radius: 5px;
  border: solid 1px #9e9baf;

  &::placeholder {
    font-family: "Muli", sans-serif;
    color: #b4b4b4;
    padding: 15px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    width: 344px;
    max-width: 60%;
    height: 52px;
    max-height: 100%;
    border-radius: 5px;
    border: solid 1px #9E9BAF;
  }

  @media (max-width: 439px) {
    max-width: 50%;
  }
`;

const JoinButton = styled.button`
  border: none;
  width: 93px;
  height: 54px;
  background-color: #badc58;
  color: #fff;
  border-radius: 5px;
  font-family: "Muli", sans-serif;
  font-size: 16px;
  margin-left: 2%;
  cursor: pointer;
  box-shadow: 0 7px 15px -2px #b4b4b4;

  &:hover {
    background-color: #abca4f;
  }

  @media (max-width: 439px) {
    margin: 10px 0;
  }
`;

const JoinImg = styled.img`
  @media (max-width: 992px) {
    position: absolute;
    right: 0%;
    opacity: 0.12;
    z-index: -1;
  }
`;

export default Join;
